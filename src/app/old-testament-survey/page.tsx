"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SECTIONS = [
  {
    name: "The Law (Torah)",
    color: "#F59E0B",
    books: "Genesis, Exodus, Leviticus, Numbers, Deuteronomy",
    timespan: "Creation to ~1400 BC",
    desc: "The first five books of the Bible — foundational to the entire canon. Genesis narrates creation, the fall, the patriarchs, and Joseph's descent to Egypt. Exodus tells the liberation from Egypt and the giving of the law at Sinai. Leviticus provides the priestly code for Israel's worship. Numbers covers the wilderness wanderings. Deuteronomy is Moses's farewell sermon, restating the law before Israel enters Canaan.",
    key_themes: "Creation and human dignity, the fall and sin's consequences, covenant (with Noah/Abraham/Moses), redemption from slavery, holiness, and the law as the shape of covenant life.",
    key_texts: "Genesis 1-3 (creation and fall), Genesis 12 (Abraham's call), Exodus 3 (burning bush), Exodus 20 (Ten Commandments), Deuteronomy 6 (Shema)",
  },
  {
    name: "Historical Books",
    color: "#EF4444",
    books: "Joshua, Judges, Ruth, 1-2 Samuel, 1-2 Kings, 1-2 Chronicles, Ezra, Nehemiah, Esther",
    timespan: "~1400 BC – ~430 BC",
    desc: "The narrative of Israel's life in the promised land — from the conquest under Joshua through the period of the judges, the united and divided monarchy, the exile, and the return. These books are not neutral history; they are theological history, asking throughout: why did this happen? Was Israel faithful to the covenant? How did God respond?",
    key_themes: "Covenant faithfulness and unfaithfulness, the rise and fall of kingship, prophetic critique of power, exile as covenant consequence, restoration as covenant mercy.",
    key_texts: "Joshua 1 (be strong and courageous), Ruth 1 (your people will be my people), 1 Samuel 16:7 (God looks at the heart), 2 Samuel 7 (Davidic covenant), 1 Kings 18 (Elijah on Carmel), Nehemiah 8 (Ezra reads the law)",
  },
  {
    name: "Poetry & Wisdom",
    color: "#8B5CF6",
    books: "Job, Psalms, Proverbs, Ecclesiastes, Song of Solomon",
    timespan: "Various (some of the oldest texts in the Bible)",
    desc: "These books address the full range of human experience — suffering (Job), worship (Psalms), practical wisdom (Proverbs), the limits of human wisdom (Ecclesiastes), and love and desire (Song of Solomon). They are less concerned with narrative and more with the inner life, the lived experience of faith, and the deepest human questions.",
    key_themes: "Suffering and divine justice, prayer and worship, the fear of the LORD as wisdom's foundation, the limits of human knowledge, embodied love and desire.",
    key_texts: "Job 38 (God answers from the storm), Psalm 22 (forsaken), Psalm 139 (known by God), Proverbs 3:5-6 (trust in the LORD), Ecclesiastes 12:13 (fear God and keep his commandments), Song of Solomon 2:4 (his banner over me is love)",
  },
  {
    name: "Major Prophets",
    color: "#3B82F6",
    books: "Isaiah, Jeremiah, Lamentations, Ezekiel, Daniel",
    timespan: "~760 BC – ~536 BC",
    desc: "The five longer prophetic books, covering the period from the Assyrian threat through the Babylonian exile and its aftermath. Isaiah is the most quoted in the NT. Jeremiah is the most emotionally raw. Ezekiel is the most visionary. Daniel interweaves court narrative and apocalyptic vision. Lamentations is Israel's grief poetry over Jerusalem's fall.",
    key_themes: "Judgment and hope, the New Covenant (Jeremiah 31), the Suffering Servant (Isaiah 53), divine sovereignty over empires (Daniel), the glory of God and its return.",
    key_texts: "Isaiah 53 (Suffering Servant), Jeremiah 31:31-34 (New Covenant), Ezekiel 37 (dry bones), Daniel 7 (Son of Man), Lamentations 3:22-23 (great is your faithfulness)",
  },
  {
    name: "Minor Prophets",
    color: GREEN,
    books: "Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi",
    timespan: "~760 BC – ~430 BC",
    desc: "Twelve shorter prophetic books — not minor in importance but in length. Hosea's marriage enacts God's love for unfaithful Israel. Amos attacks economic injustice. Jonah is God's concern for Nineveh. Micah provides the clearest single summary of covenant ethics ('do justice, love mercy, walk humbly'). Zechariah is saturated with NT-applied prophecy. Malachi closes the OT with a promise of Elijah's return.",
    key_themes: "Social justice, divine compassion for all nations, covenant faithfulness, messianic hope, the Day of the LORD.",
    key_texts: "Hosea 11:1 (called out of Egypt), Joel 2:28-29 (I will pour out my Spirit), Amos 5:24 (let justice roll), Jonah 1-2, Micah 6:8 (act justly), Zechariah 9:9 (king on donkey), Malachi 3:1 (my messenger)",
  },
];

const THEMES = [
  {
    title: "Creation & Fall",
    verse: "Genesis 1:1; 3:15",
    desc: "The OT opens with God creating a good world and humanity made in his image — and immediately confronts the catastrophe of the fall. Genesis 3 introduces the fracture at the center of all human experience: estrangement from God, from one another, and from the created order. The rest of the OT is the story of God's response to this fracture.",
  },
  {
    title: "Covenant & Promise",
    verse: "Genesis 12:1–3; 2 Samuel 7:12–16",
    desc: "God binds himself to his people through covenants — solemn commitments with Abraham, Moses, and David that are not merely contracts but relationships. Each covenant carries a promise: land, descendants, presence, and a coming king. These promises accumulate through the OT and find their yes in Christ.",
  },
  {
    title: "Law & Holiness",
    verse: "Leviticus 19:2; Deuteronomy 6:4–5",
    desc: "The law given at Sinai is not a burden imposed on Israel but the shape of covenant life — what it looks like to be God's people in the world. Leviticus and Deuteronomy reveal that God is holy and calls his people to reflect that holiness in worship, ethics, and the ordering of community life.",
  },
  {
    title: "Prophecy & Fulfillment",
    verse: "Isaiah 53:5; Jeremiah 31:31",
    desc: "The prophets spoke into specific historical crises — the Assyrian threat, the Babylonian exile — but their words carried a surplus of meaning pointing beyond those moments. Isaiah's Suffering Servant, Jeremiah's New Covenant, and the prophets' vision of a restored Israel all set expectations that the NT claims are fulfilled in Jesus.",
  },
  {
    title: "Exile & Return",
    verse: "Daniel 9:3; Ezra 1:1–3",
    desc: "The Babylonian exile is the great trauma of OT history — the loss of land, temple, and king that seemed to contradict every promise God had made. Yet the prophets reframe exile as discipline, not abandonment, and promise a return that is itself a new exodus. Daniel's faithfulness in Babylon and Ezra's return become patterns for God's people in every displacement.",
  },
  {
    title: "The Messianic Hope",
    verse: "Isaiah 53:1–12; Psalm 22:1",
    desc: "Running through the OT is an intensifying hope for God's anointed king — one who would be more than any earthly monarch. The suffering servant of Isaiah 53 and the forsaken yet vindicated figure of Psalm 22 sketch a portrait of a Messiah who saves through suffering, not military triumph. The NT's central claim is that Jesus is the one to whom all these portraits pointed.",
  },
];

const SCHOLARS = [
  {
    id: "wenham",
    name: "Gordon Wenham",
    era: "Born 1943",
    context: "British OT scholar; Genesis commentaries in WBC and Tyndale series",
    bio: "Gordon Wenham is among the most respected evangelical OT scholars of his generation, known for meticulous textual scholarship combined with theological sensitivity. His two-volume commentary on Genesis (Word Biblical Commentary) is the standard evangelical academic treatment — rigorous on literary structure, ancient Near Eastern backgrounds, and theological meaning. His Exploring the Old Testament series provides accessible entry points for students. His work on narrative ethics (Story as Torah) pioneered the reading of OT narrative as moral formation rather than mere illustration. His career at Trinity College Gloucester combined technical scholarship with pastoral concern for the church.",
    quote: "Genesis is not a primitive myth struggling to become science. It is a sophisticated theological statement, shaped to answer the deepest questions of its first readers: Who is God? What is humanity? What went wrong, and can it be fixed?",
    contribution: "Wenham's Genesis commentaries set the standard for evangelical engagement with the Pentateuch — neither naively literalistic nor capitulating to critical assumptions. His work on the literary structures of Genesis (chiasm, repeated formulas, narrative architecture) showed that the text is far more sophisticated than earlier generations recognized.",
  },
  {
    id: "longman",
    name: "Tremper Longman III",
    era: "Born 1952",
    context: "American evangelical OT scholar; Westmont College; How to Read the Psalms",
    bio: "Tremper Longman is one of the most prolific evangelical OT scholars of the past 40 years, with accessible commentaries on Job, Psalms, Proverbs, Ecclesiastes, Song of Solomon, and Daniel. His Literary Approaches to Biblical Interpretation (1987) introduced evangelical students to narrative criticism and genre analysis of the OT in a constructive way. His How to Read the Psalms (1988) and How to Read Proverbs (2002) made the hermeneutics of wisdom literature accessible to non-specialists. He co-authored A Complete Literary Guide to the Bible with Leland Ryken and served as Old Testament editor for the Spirit of the Reformation Study Bible.",
    quote: "The Psalms are Israel's hymnbook — but they are also her prayer book, her theology book, and her counseling manual. Every human emotion is there, addressed to the God who can handle them all.",
    contribution: "Longman's literary approach to OT interpretation equipped a generation of pastors and students to read poetic and wisdom texts on their own terms — not as allegory, not as direct prophecy, but as literary forms with their own conventions, signals, and theological logic. His prolific commentary writing made serious OT scholarship available to ordinary readers.",
  },
  {
    id: "walton",
    name: "John Walton",
    era: "Born 1952",
    context: "American evangelical OT scholar; Wheaton College; The Lost World of Genesis One",
    bio: "John Walton specializes in the intersection of the OT and ancient Near Eastern backgrounds — the cultural and literary context within which the Hebrew Bible was written and first heard. His The Lost World of Genesis One (2009) argued that Genesis 1 describes the assignment of function to the cosmos, not its material creation — a reading grounded in ancient Near Eastern cosmological concepts. This reframing has been influential in evangelical discussions of creation and science. His commentaries on Genesis (NIVAC), Job (NIVAC), and Psalms (with others) combine ANE background with pastoral application.",
    quote: "We cannot read Genesis 1 as if Moses was answering the questions we bring to it from a post-Enlightenment scientific world. He was answering the questions ancient Israelites brought — and those questions were primarily about identity, order, and relationship with God.",
    contribution: "Walton's ANE approach has significantly expanded evangelical exegesis of the creation accounts, the flood narrative, and Job by providing the cultural context that makes ancient statements intelligible. His work has helped evangelical students engage science-religion questions without assuming the text is making modern scientific claims.",
  },
  {
    id: "waltke",
    name: "Bruce Waltke",
    era: "Born 1930",
    context: "American evangelical OT scholar; co-author of An Introduction to Biblical Hebrew Syntax",
    bio: "Bruce Waltke is one of the most eminent OT scholars in evangelical history — a lifelong student of the Hebrew text whose career spanned Regent College, Reformed Theological Seminary, and Knox Theological Seminary. His two-volume commentary on Proverbs (NICOT) is the most comprehensive evangelical treatment of the book. An Introduction to Biblical Hebrew Syntax (co-authored with M. O'Connor) is the standard reference grammar for biblical Hebrew in evangelical seminaries worldwide. His Old Testament Theology (2007) integrates OT theology with NT fulfillment in a comprehensive framework rarely attempted by modern scholars.",
    quote: "The Old Testament is a covenant document — every text exists within the framework of God's commitment to Abraham and his seed, and that commitment is the lens through which everything else must be read.",
    contribution: "Waltke has shaped evangelical OT scholarship at the foundational level of Hebrew language and at the synthetic level of OT theology. His Hebrew grammar is used by nearly every evangelical seminary student. His Proverbs commentaries transformed how the book is preached and taught — showing its literary sophistication, its theological coherence, and its practical wisdom in a single sustained treatment.",
  },
  {
    id: "goldingay",
    name: "John Goldingay",
    era: "Born 1942",
    context: "British-American OT theologian; Fuller Theological Seminary; Old Testament Theology (3 vols.)",
    bio: "John Goldingay is one of the most prolific and idiosyncratic evangelical OT scholars — widely read, theologically adventurous, and deeply pastoral. His three-volume Old Testament Theology (Israel's Gospel, Israel's Faith, Israel's Life) is the most comprehensive evangelical engagement with OT theology in recent decades, written with attention to the OT's own categories and resistant to forcing it into NT frameworks prematurely. His commentary on Isaiah (NICOT/IVP) and Daniel (WBC) are standard evangelical references. He served as Principal of St John's College, Nottingham before moving to Fuller Theological Seminary.",
    quote: "The Old Testament keeps asking questions that it doesn't answer — questions about suffering, about justice, about the character of God — and it is precisely in sitting with those questions rather than resolving them quickly that its full theological weight is felt.",
    contribution: "Goldingay brought OT theology back to the OT's own terms — resisting the temptation to read every text as a prequel to the NT. His attention to what the OT says on its own terms, before asking how it relates to Christ, has helped readers encounter the richness of Israel's theology rather than flattening it into Christian categories. His accessible writing made serious OT scholarship available to preachers and lay readers alike.",
  },
];

const READING_GUIDE = [
  { section: "Begin with Genesis", icon: "🌅", desc: "Genesis is the foundation of everything. Read it slowly: the creation, the fall, Abraham's call, Joseph's story. Don't rush past the genealogies — they are the OT's way of marking time and tracing the covenant line. Notice how the same God who creates in chapter 1 is the God speaking to Abraham in chapter 12 and weeping over Joseph's pit." },
  { section: "Read Exodus through the Lens of Redemption", icon: "🔥", desc: "Exodus is the central redemptive act of the OT — the event that defines who God is and what he does. The burning bush, the plagues, the Passover, the crossing of the sea, and the giving of the law at Sinai form the foundational narrative. Read Deuteronomy 26:5-9 as Israel's creed — the summary statement they would repeat generation after generation." },
  { section: "Psalms as Daily Prayer", icon: "🙏", desc: "Don't read Psalms straight through in one sitting. Read one psalm daily alongside other OT reading. The Psalms are organized into five books (like the Torah) and include lament, praise, thanksgiving, and royal psalms. Psalm 1-2 form a deliberate introduction to the whole collection. Psalm 119 is the longest chapter in the Bible — a meditation on the love of God's law." },
  { section: "The Prophets: Context First", icon: "📢", desc: "Before reading Isaiah, Jeremiah, or Ezekiel, read the historical section that corresponds to their period: 2 Kings 15-25 covers the period of the major pre-exilic prophets; Ezra-Nehemiah covers the return period. The prophets are pastors speaking into specific crises — you need the crisis to understand the pastoral address. Isaiah 1-39 addresses the Assyrian threat; 40-55 addresses the exile; 56-66 addresses the return." },
  { section: "Read the Wisdom Books as Counterpoint", icon: "🌿", desc: "Job, Ecclesiastes, and Proverbs form a three-part conversation that resists easy answers. Proverbs says the world is ordered and wise living produces good outcomes. Job says the world does not always work this way — the righteous suffer and God seems absent. Ecclesiastes says human wisdom reaches its limit and life under the sun is vanity without God. Read all three together to get the full wisdom tradition." },
  { section: "The OT Points Forward — Notice the Arrows", icon: "→", desc: "As you read, watch for the forward-pointing passages: Deuteronomy 18:15-18 (a prophet like Moses to come), 2 Samuel 7 (an eternal Davidic king), Isaiah 53 (a suffering servant), Jeremiah 31 (a new covenant written on the heart), Ezekiel 36-37 (the spirit poured out on dry bones), Daniel 7 (a Son of Man given eternal dominion). These are not isolated proof-texts — they are the OT building its own expectation of what must come next." },
];

const OT_VIDEOS = [
  { videoId: "ACZbpLkY8To", title: "The Old Testament: A Crash Course", channel: "The Bible Project", desc: "An animated overview of the Old Testament's structure, story, and themes — one of the clearest introductions available." },
  { videoId: "Z8lkuuhVkOI", title: "How to Read the Old Testament", channel: "Tim Keller / Gospel in Life", desc: "Keller explains how Christians should read the OT — not as a collection of moral stories but as the unified story that Jesus came to complete." },
  { videoId: "fJnGJN6laqE", title: "The Story of the Bible", channel: "Desiring God", desc: "How the 39 books of the OT fit together into a single coherent narrative — and why understanding that narrative changes how you read every individual text." },
  { videoId: "sxMhDVkdULw", title: "Old Testament Overview", channel: "Ligonier Ministries", desc: "A scholarly survey of the OT's major sections, literary genres, and theological themes from a Reformed perspective." },
];

type Tab = "overview" | "books" | "themes" | "scholars" | "reading" | "videos";

export default function OldTestamentSurveyPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_old-testament-survey_tab", "overview");
  const [selected, setSelected] = useState("The Law (Torah)");
  const [selectedScholar, setSelectedScholar] = useState("wenham");

  const section = SECTIONS.find(s => s.name === selected)!;
  const scholar = SCHOLARS.find(s => s.id === selectedScholar)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Old Testament Survey</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The Old Testament is not a prelude to the real story — it is the story. 39 books spanning millennia of Israel&apos;s life with God, all pointing toward the one in whom their promises find their yes.
          </p>
        </div>

        <div style={{ display: "flex", gap: 4, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}`, flexWrap: "wrap" }}>
          {[
            { id: "overview" as const, label: "Overview", icon: "📚" },
            { id: "books" as const, label: "Books", icon: "📖" },
            { id: "themes" as const, label: "Themes", icon: "🧵" },
            { id: "scholars" as const, label: "Scholars", icon: "🧠" },
            { id: "reading" as const, label: "Reading Guide", icon: "🗺️" },
            { id: "videos" as const, label: "Videos", icon: "▶️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer", minWidth: 80 }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "overview" && (
          <div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {SECTIONS.map(s => (
                <button key={s.name} onClick={() => setSelected(s.name)}
                  style={{ padding: "8px 14px", borderRadius: 20, border: `1px solid ${selected === s.name ? s.color : BORDER}`, background: selected === s.name ? `${s.color}15` : "transparent", color: selected === s.name ? s.color : MUTED, fontWeight: 700, fontSize: 12, cursor: "pointer" }}>
                  {s.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${section.color}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                <div>
                  <h2 style={{ color: section.color, fontWeight: 900, fontSize: 22, margin: 0, marginBottom: 4 }}>{section.name}</h2>
                  <div style={{ color: MUTED, fontSize: 13 }}>{section.timespan}</div>
                </div>
              </div>
              <div style={{ background: BG, borderRadius: 8, padding: 12, marginBottom: 16 }}>
                <div style={{ color: MUTED, fontSize: 11, fontWeight: 700, marginBottom: 4 }}>BOOKS</div>
                <p style={{ color: TEXT, fontSize: 13, margin: 0 }}>{section.books}</p>
              </div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 16 }}>{section.desc}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                <div style={{ background: `${section.color}08`, border: `1px solid ${section.color}25`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: section.color, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY THEMES</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{section.key_themes}</p>
                </div>
                <div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: 14 }}>
                  <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>KEY TEXTS</div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{section.key_texts}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "books" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The 39 books of the Old Testament organized by section. Each group has its own literary character, historical context, and theological emphasis — but together they form a single coherent story.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {SECTIONS.map(s => {
                const books = s.books.split(", ");
                return (
                  <div key={s.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                      <div style={{ color: s.color, fontWeight: 800, fontSize: 15 }}>{s.name}</div>
                      <div style={{ color: MUTED, fontSize: 12, marginLeft: "auto" }}>{s.timespan}</div>
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {books.map(b => (
                        <span key={b} style={{ background: `${s.color}12`, border: `1px solid ${s.color}30`, color: TEXT, borderRadius: 6, padding: "4px 10px", fontSize: 13, fontWeight: 600 }}>{b}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Six major themes run through the entire Old Testament and connect directly to their fulfillment in Christ. Seeing them is essential to reading the OT as Christian Scripture.
              </p>
            </div>
            {THEMES.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.title}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.verse}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 14, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "scholars" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Five evangelical OT scholars whose work has shaped how the church reads, interprets, and preaches the Hebrew Scriptures. Each represents a different area of specialization — from Genesis and wisdom literature to Hebrew grammar and prophetic theology.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
              {SCHOLARS.map(s => (
                <button key={s.id} onClick={() => setSelectedScholar(s.id)}
                  style={{ padding: "8px 16px", borderRadius: 20, border: `1px solid ${selectedScholar === s.id ? PURPLE : BORDER}`, background: selectedScholar === s.id ? `${PURPLE}20` : "transparent", color: selectedScholar === s.id ? PURPLE : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                  {s.name}
                </button>
              ))}
            </div>
            <div style={{ background: CARD, border: `1px solid ${PURPLE}30`, borderRadius: 14, padding: 28 }}>
              <div style={{ marginBottom: 20 }}>
                <h2 style={{ color: PURPLE, fontWeight: 900, fontSize: 22, margin: 0, marginBottom: 4 }}>{scholar.name}</h2>
                <div style={{ color: MUTED, fontSize: 13, marginBottom: 6 }}>{scholar.era}</div>
                <div style={{ color: GREEN, fontSize: 13, fontWeight: 600 }}>{scholar.context}</div>
              </div>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, marginBottom: 20 }}>{scholar.bio}</p>
              <div style={{ background: `${PURPLE}10`, border: `1px solid ${PURPLE}30`, borderRadius: 10, padding: 18, marginBottom: 20 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>IN THEIR OWN WORDS</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, fontStyle: "italic", margin: 0 }}>&ldquo;{scholar.quote}&rdquo;</p>
              </div>
              <div style={{ background: `${GREEN}10`, border: `1px solid ${GREEN}30`, borderRadius: 10, padding: 18 }}>
                <div style={{ color: GREEN, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>DISTINCTIVE CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{scholar.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reading" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                A practical sequence for reading the Old Testament — not just reading through it, but reading it well. The goal is not to finish but to understand; not to check boxes but to encounter the living God who meets Israel, and through Israel, the whole world.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {READING_GUIDE.map((r, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div style={{ fontSize: 28 }}>{r.icon}</div>
                    <div>
                      <div style={{ color: GREEN, fontWeight: 800, fontSize: 16 }}>{r.section}</div>
                      <div style={{ color: MUTED, fontSize: 12 }}>Step {i + 1}</div>
                    </div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.8, margin: 0 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These video resources offer accessible overviews of the Old Testament — its structure, narrative arc, and major themes — from trusted teachers and scholars.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))", gap: 16 }}>
              {OT_VIDEOS.map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <iframe width="100%" style={{ aspectRatio: "16/9", border: "none", display: "block" } as React.CSSProperties}
                    src={`https://www.youtube.com/embed/${v.videoId}`} title={v.title} allowFullScreen />
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ color: PURPLE, fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{v.channel}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
