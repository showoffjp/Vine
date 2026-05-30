"use client";
import { useState } from "react";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#00FF88", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

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

export default function OldTestamentSurveyPage() {
  const [activeTab, setActiveTab] = useState<"sections" | "themes">("sections");
  const [selected, setSelected] = useState("The Law (Torah)");

  const section = SECTIONS.find(s => s.name === selected)!;

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
            { id: "sections" as const, label: "The Sections", icon: "📚" },
            { id: "themes" as const, label: "Major Themes", icon: "🧵" },
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
      </div>
    </div>
  );
}
