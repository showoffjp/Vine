"use client";
import { useState } from "react";

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
  { theme: "The Covenant", desc: "The organizing principle of the OT. God initiates binding commitments (covenants) with Noah, Abraham, Moses, and David — each building on the previous and pointing forward. The NT presents Jesus as the fulfillment of all these covenants and the mediator of the New Covenant.", refs: "Genesis 9, 12, 15; Exodus 19-24; 2 Samuel 7; Jeremiah 31" },
  { theme: "Redemption", desc: "The Exodus from Egypt is the primary OT image of salvation — God acts to free his people from bondage. This narrative pattern (bondage, cry, divine action, liberation, new covenant) recurs throughout the OT and is applied to the work of Christ in the NT.", refs: "Exodus 1-15, Isaiah 43:1-7, Hosea 11" },
  { theme: "The Promised Land", desc: "Canaan functions as a type — a concrete reality that points to the final rest God promises his people. Hebrews explicitly connects the promised land to the heavenly rest that remains for God's people (Hebrews 4). The land is both a genuine historical gift and a shadow of something greater.", refs: "Genesis 12:7, Deuteronomy 6:3, Hebrews 4:8-11" },
  { theme: "The Temple", desc: "God's presence dwelling among his people — first in the tabernacle, then in Solomon's temple. The temple's destruction is the most catastrophic event in OT history; its restoration is the promise of the prophets. Jesus presents himself as the true temple (John 2:19); the Spirit is the new temple (1 Corinthians 3:16).", refs: "Exodus 40, 1 Kings 8, Ezekiel 40-48, John 2:19-21" },
  { theme: "The Messiah", desc: "The hope for God's anointed king who would establish his kingdom in righteousness grows from the Davidic covenant (2 Samuel 7) through the prophets. The suffering servant of Isaiah 53, the son of man of Daniel 7, and the Shepherd-King of Ezekiel 34 are all messianic portraits that the NT applies to Jesus.", refs: "2 Samuel 7:12-16, Isaiah 9:6-7, 53:1-12, Daniel 7:13-14, Micah 5:2" },
];

const SCHOLARS = [
  {
    id: "origen",
    name: "Origen of Alexandria",
    era: "185 – 254",
    context: "Egyptian biblical scholar, De Principiis, Hexapla",
    bio: "Origen was the most learned biblical scholar of the ancient church — a man who, by his own account, had read more Scripture than any of his contemporaries. His Hexapla placed six versions of the OT in parallel columns, laying the foundation for textual criticism. His approach to OT interpretation was primarily allegorical: beneath every literal sense of Scripture lies a spiritual sense, and it is the spiritual sense that nourishes the soul. His reading of the Song of Solomon as an allegory of the soul's love for God shaped centuries of mystical exegesis. Critics (Jerome, Epiphanius) attacked his speculative theology; defenders praised his unmatched scriptural depth.",
    quote: "Scripture is like a lamp kindled by God — it illumines not only the outer but the inner life. The careless reader sees only the surface; the prayerful reader sees depths beyond depths.",
    contribution: "Origen established typological and allegorical reading as the standard Christian method for interpreting the OT. His conviction — that Christ is hidden throughout the entire Hebrew Bible, waiting to be uncovered — meant that every Christian reader of the OT should be asking: where is Jesus here? This question, which shaped Augustine, Aquinas, and Luther, prevents the OT from becoming a museum of ancient religion and makes it instead a living testimony to the one in whom all its promises find their yes.",
  },
  {
    id: "augustine",
    name: "Augustine of Hippo",
    era: "354 – 430",
    context: "Bishop of Hippo, On Christian Doctrine, City of God",
    bio: "Augustine's contribution to OT interpretation is threefold. First, his De Doctrina Christiana (On Christian Doctrine) provided the first systematic account of how to read Scripture: every obscurity in Scripture has a clearer parallel passage; every passage either teaches or nourishes love of God and neighbor. Second, his massive City of God reads OT history as the story of two cities — the City of God and the City of Man — winding through history toward their final separation. Third, his polemics against the Manichaean dismissal of the OT established that the God of the OT and the God of the NT are the same God — the loving Father, not a harsh lawgiver.",
    quote: "All Scripture tends to this one end: to build up the love of God and neighbor. If your interpretation builds up love, you have not gone far wrong even if it was not what the author intended.",
    contribution: "Augustine's canonical reading of the OT — that the entire Bible is about love of God and neighbor, and every obscure passage should be interpreted in light of clearer passages that illuminate this love — became the backbone of medieval biblical interpretation. His two-cities reading of history provides Christians with a framework for understanding their position: citizens of the heavenly city, on pilgrimage through the earthly city, whose history is being shaped by divine providence toward its final end.",
  },
  {
    id: "luther",
    name: "Martin Luther",
    era: "1483 – 1546",
    context: "German Reformer, biblical lectures on Genesis, Psalms, Galatians",
    bio: "Luther spent more time lecturing on the OT than on anything else: his lectures on Genesis fill eight volumes; his Psalms commentary is among his greatest works. His central interpretive principle was the distinction between Law and Gospel: the OT is primarily Law (showing us our sin and our need) and Gospel (promising the coming Savior). This does not mean the OT has no gospel — on the contrary, Luther found Christ everywhere in it: in the promise to Abraham, in the Psalms, in the suffering servant of Isaiah. But the Law reveals the depth of our problem so that the Gospel's solution can be truly felt as good news. Luther also insisted that the literal sense of Scripture (not allegorical additions) is the foundation of all interpretation.",
    quote: "The Holy Scriptures require a humble reader who shows reverence and fear toward the Word of God, and constantly says, 'Teach me, teach me, teach me.'",
    contribution: "Luther's Law-Gospel hermeneutic gave the OT a permanent place in Christian proclamation: it is not merely background for the NT but the preparation that makes the NT comprehensible. His literal sense priority corrected allegorical excess and laid the ground for modern historical-grammatical interpretation. His recovery of the Psalms as prayer — not performance — made them central to Protestant worship and spirituality in a way they had not been since the early church.",
  },
  {
    id: "vonrad",
    name: "Gerhard von Rad",
    era: "1901 – 1971",
    context: "German OT scholar, Old Testament Theology (2 vols., 1957-60)",
    bio: "Von Rad's Old Testament Theology is the most influential OT theology of the twentieth century. Its central insight: the OT is not a collection of timeless theological ideas but a tradition of Israel's testimony about what God has done in history. The starting point is not the concept of God but the confession of Israel: 'A wandering Aramean was my father' (Deuteronomy 26:5ff). Von Rad argued that the Hexateuch (Genesis through Joshua) represents a 'settlement credo' — a succession of historical recitals confessing God's saving acts — which was gradually expanded into the full narrative of the Pentateuch. The prophets then reinterpreted these founding events for new situations of judgment and hope.",
    quote: "Israel confessed her faith by telling stories. The OT is not a system of doctrine but a sequence of testimonies — a people saying: this is what God did for us, and this is what it means.",
    contribution: "Von Rad recovered the narrative character of OT theology: it is not primarily a set of doctrines but a story — the story of Israel's life with God through history. His treatment of typology (OT events as patterns that are taken up and exceeded in the NT) provided a sophisticated account of the relationship between the Testaments that avoided both allegorical fantasy and historical-critical reductionism. His influence is felt in canonical approaches to Scripture and in narrative theology more broadly.",
  },
  {
    id: "brueggemann",
    name: "Walter Brueggemann",
    era: "Born 1933",
    context: "American OT theologian, The Prophetic Imagination, Theology of the Old Testament",
    bio: "Brueggemann has spent 60 years making the OT prophets speak into contemporary Christian life and politics. His The Prophetic Imagination (1978) argued that the OT prophets were not primarily predictors of the future but critics of the dominant consciousness of their day — and that this critique is the permanent vocation of the church. The royal theology of the court (numbness, self-satisfaction, the management of injustice) is always being challenged by the prophetic imagination (grief, energy, hope rooted in God's promises). His Theology of the Old Testament (1997) structurally distinguishes between Israel's core testimony (what Israel confesses about God) and counter-testimony (what Israel says when God seems absent or unjust).",
    quote: "The task of prophetic imagination is to bring to expression the numbness that the dominant reality has imposed, to make visible what the dominant reality has suppressed.",
    contribution: "Brueggemann has done more than any other OT scholar to make the prophetic books speak into the church's engagement with power, injustice, and cultural numbness. His recovery of lament — the counter-testimony of Israel when God seems absent — has given permission to a generation of Christians to bring their grief honestly to God rather than suppressing it in false praise. His reading of the prophets as critics of comfortable religion speaks directly into every age where the church is tempted by cultural accommodation.",
  },
];

const READING_GUIDE = [
  { section: "Start with Genesis and Exodus", icon: "🌅", desc: "Genesis and Exodus form the foundation of the entire Bible. Read them first, slowly, noting the key covenants (Noah, Abraham, Mosaic) and the patterns they establish: creation, fall, promise, redemption. Don't skip the genealogies — they are the spine of the narrative." },
  { section: "Read Psalms One Per Day", icon: "🎵", desc: "The Psalter is Israel's prayer book — designed to be read slowly and repeatedly, not consumed in one sitting. Reading one psalm per day and praying it back to God is more formative than reading through it quickly. The Hebrew emotional range of the Psalms (complaint, praise, lament, trust, rage) gives vocabulary for your own prayer life." },
  { section: "Read the Prophets with the Historical Books", icon: "📰", desc: "Isaiah, Jeremiah, Ezekiel, and the Twelve are anchored in specific historical moments (8th century Assyrian crisis, 6th century Babylonian exile). Reading Amos alongside 2 Kings 14, or Jeremiah alongside 2 Kings 23-25, makes both come alive. The prophets are not free-floating predictions but specific interventions into specific crises." },
  { section: "Bring a Reading Map", icon: "🗺️", desc: "A visual overview of the OT storyline — a timeline or canonical chart — transforms the reading experience. The Chronological Bible, The Bible Project's videos, or any good OT introduction helps you see where each book fits in the grand narrative. The OT makes more sense when you know where you are in the story." },
  { section: "Read with the NT in View", icon: "✝️", desc: "The earliest Christians read the entire Hebrew Bible as pointing toward Jesus. Reading with this question — where does this point toward Christ? — does not distort the OT but reveals its deepest intention. Every sacrifice points to the cross; every king to the King; every prophet to the Prophet. This typological reading is not foreign to the text — it is what Jesus himself models (Luke 24:27)." },
  { section: "Slow Down for Wisdom Literature", icon: "🧠", desc: "Job, Proverbs, and Ecclesiastes reward slow, meditative reading. They are not designed to be rushed. Job especially resists quick resolution — its power is in the speeches, the complaints, and the divine answer from the whirlwind that is not really an answer. Read these books like poetry, not like information." },
];

type Tab = "sections" | "themes" | "scholars" | "reading";

export default function OldTestamentSurveyPage() {
  const [activeTab, setActiveTab] = useState<Tab>("sections");
  const [selected, setSelected] = useState("The Law (Torah)");
  const [selectedScholar, setSelectedScholar] = useState("origen");

  const section = SECTIONS.find(s => s.name === selected)!;
  const scholar = SCHOLARS.find(s => s.id === selectedScholar)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 40 }}>
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>📜</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>Old Testament Survey</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            The Old Testament is not a prelude to the real story — it is the story. 39 books spanning millennia of Israel's life with God, all pointing toward the one in whom their promises find their yes.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "sections" as const, label: "Sections", icon: "📚" },
            { id: "themes" as const, label: "Themes", icon: "🧵" },
            { id: "scholars" as const, label: "Scholars", icon: "🧠" },
            { id: "reading" as const, label: "Reading Guide", icon: "🗺️" },
          ].map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              style={{ flex: 1, padding: "10px 8px", borderRadius: 8, border: "none", background: activeTab === t.id ? PURPLE : "transparent", color: activeTab === t.id ? "#fff" : MUTED, fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
              {t.icon} {t.label}
            </button>
          ))}
        </div>

        {activeTab === "sections" && (
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

        {activeTab === "themes" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                These five themes run through the entire Old Testament and connect directly to their fulfillment in Christ. Seeing them is essential to reading the OT as Christian Scripture.
              </p>
            </div>
            {THEMES.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24, marginBottom: 14 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                  <h3 style={{ color: GREEN, fontWeight: 800, fontSize: 18, margin: 0 }}>{t.theme}</h3>
                  <span style={{ background: `${PURPLE}20`, color: PURPLE, padding: "2px 10px", borderRadius: 10, fontSize: 11, fontWeight: 700, flexShrink: 0, marginLeft: 12 }}>{t.refs}</span>
                </div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontSize: 14, margin: 0 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === "scholars" && (
          <div style={{ display: "flex", gap: 20 }}>
            <div style={{ width: 210, flexShrink: 0, display: "flex", flexDirection: "column", gap: 6 }}>
              {SCHOLARS.map(s => (
                <button key={s.id} onClick={() => setSelectedScholar(s.id)}
                  style={{ width: "100%", background: selectedScholar === s.id ? `${PURPLE}20` : CARD, border: `1px solid ${selectedScholar === s.id ? PURPLE : BORDER}`, borderRadius: 10, padding: "12px 14px", textAlign: "left", cursor: "pointer" }}>
                  <div style={{ color: selectedScholar === s.id ? GREEN : TEXT, fontWeight: 700, fontSize: 13, marginBottom: 2 }}>{s.name}</div>
                  <div style={{ color: MUTED, fontSize: 11 }}>{s.era}</div>
                </button>
              ))}
            </div>
            <div style={{ flex: 1, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 26 }}>
              <h2 style={{ color: GREEN, fontWeight: 900, fontSize: 22, margin: 0 }}>{scholar.name}</h2>
              <p style={{ color: MUTED, fontSize: 13, fontStyle: "italic", marginBottom: 16 }}>{scholar.context}</p>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, marginBottom: 20 }}>{scholar.bio}</p>
              <blockquote style={{ margin: "0 0 20px", padding: "12px 16px", borderLeft: `3px solid ${GREEN}`, background: `${GREEN}08`, borderRadius: "0 8px 8px 0" }}>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>"{scholar.quote}"</p>
              </blockquote>
              <div style={{ background: `${PURPLE}08`, border: `1px solid ${PURPLE}20`, borderRadius: 10, padding: 16 }}>
                <div style={{ color: PURPLE, fontWeight: 700, fontSize: 12, marginBottom: 8 }}>CONTRIBUTION</div>
                <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{scholar.contribution}</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reading" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 20 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                The OT rewards patient, prayerful reading — but it helps to have a strategy. These six principles will make your reading more fruitful and help the 39 books feel like one coherent story.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 14 }}>
              {READING_GUIDE.map((r, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 20 }}>{r.icon}</span>
                    <div style={{ color: GREEN, fontWeight: 800, fontSize: 14 }}>{r.section}</div>
                  </div>
                  <p style={{ color: TEXT, fontSize: 13, lineHeight: 1.65, margin: 0 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
