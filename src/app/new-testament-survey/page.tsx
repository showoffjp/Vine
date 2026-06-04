"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { usePersistedState } from "@/hooks/usePersistedState";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32";
const GREEN = "#3a7d56", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const SECTIONS = [
  {
    name: "Gospels",
    color: "#EF4444",
    books: "Matthew, Mark, Luke, John",
    timespan: "~50-100 AD (events: ~4 BC – 33 AD)",
    desc: "Four accounts of the life, ministry, death, and resurrection of Jesus — each written for a different audience and from a different perspective. Matthew (Jewish audience) emphasizes Jesus as Messiah and new Moses. Mark (Roman audience) is the most urgent and action-packed. Luke (Gentile audience) emphasizes mercy, women, and the poor. John (universal) is the most theological, emphasizing Christ's divine nature.",
    key_themes: "The Kingdom of God, discipleship, the nature of Jesus, death and resurrection, the fulfillment of OT promises.",
    key_texts: "Matthew 5-7 (Sermon on the Mount), Mark 10:45 (ransom for many), Luke 15 (lost son), John 1:1-18 (Word became flesh), John 3:16, John 11 (resurrection of Lazarus)",
  },
  {
    name: "Acts",
    color: "#F59E0B",
    books: "Acts",
    timespan: "~80-90 AD (events: ~33-62 AD)",
    desc: "The second volume of Luke's two-part work, covering the birth of the church at Pentecost, the early Jerusalem community, the persecution and scattering, Peter's ministry, and Paul's three missionary journeys and journey to Rome. Acts is the narrative bridge between the Gospels and the Epistles, showing how the gospel spread from Jerusalem to the ends of the earth.",
    key_themes: "The gift of the Holy Spirit, the growth of the church, the inclusion of Gentiles, the power of the gospel to cross cultural barriers, the role of suffering in mission.",
    key_texts: "Acts 1:8 (witnesses to the ends of the earth), Acts 2 (Pentecost), Acts 10 (Cornelius), Acts 15 (Jerusalem Council), Acts 17:16-34 (Paul at the Areopagus)",
  },
  {
    name: "Pauline Letters",
    color: "#8B5CF6",
    books: "Romans, 1-2 Corinthians, Galatians, Ephesians, Philippians, Colossians, 1-2 Thessalonians, 1-2 Timothy, Titus, Philemon",
    timespan: "~49-65 AD",
    desc: "Thirteen letters attributed to Paul — the most theologically significant body of writing in the NT. Romans is his most systematic treatment of the gospel. Galatians is his most polemical (against works-righteousness). The Corinthian letters address practical church problems. The prison epistles (Ephesians, Philippians, Colossians, Philemon) were written during imprisonment. The pastoral epistles (Timothy, Titus) address church leadership.",
    key_themes: "Justification by faith, the new creation, the body of Christ, the supremacy of Christ, gospel ministry, ethical formation.",
    key_texts: "Romans 1:16-17 (gospel power), Romans 3:21-26 (righteousness through faith), Galatians 2:20 (crucified with Christ), Ephesians 2:8-9 (saved by grace), Philippians 2:5-11 (Christ hymn), Philippians 4:11-13 (content in all circumstances)",
  },
  {
    name: "General Letters",
    color: "#3B82F6",
    books: "Hebrews, James, 1-2 Peter, 1-2-3 John, Jude",
    timespan: "~49-90 AD",
    desc: "Eight letters from various apostolic authors, each addressing different communities and concerns. Hebrews argues for Christ's superiority over the Mosaic covenant (ideal for Jewish Christians). James addresses practical ethics and the relationship between faith and works. Peter's letters address suffering and false teaching. John's letters address love and the Antichrist. Jude addresses false teaching briefly and urgently.",
    key_themes: "The sufficiency of Christ, the relationship of faith and works, suffering and perseverance, love as the mark of the Christian community, false teaching.",
    key_texts: "Hebrews 11 (faith hall of fame), Hebrews 12:1-2 (run the race), James 1:2-4 (joy in trials), James 2:14-17 (faith without works), 1 Peter 2:9 (royal priesthood), 1 John 4:7-12 (God is love)",
  },
  {
    name: "Revelation",
    color: GREEN,
    books: "Revelation",
    timespan: "~95 AD",
    desc: "The final book of the Bible — an apocalyptic vision given to John on the island of Patmos. Revelation is not primarily a code to decode but a vision to inhabit — designed to strengthen persecuted Christians with the certainty of God's ultimate victory. It draws heavily on OT imagery (especially Ezekiel and Daniel) and culminates with the new heaven and new earth, the New Jerusalem, and the presence of God with his people.",
    key_themes: "The sovereignty of God, the victory of the Lamb, the judgment of evil powers, the vindication of the martyrs, the new creation.",
    key_texts: "Revelation 1:8 (Alpha and Omega), Revelation 4-5 (throne room and the Lamb), Revelation 7:9 (multitude of every nation), Revelation 12 (cosmic conflict), Revelation 19-22 (final victory and new creation)",
  },
];

const THEMES = [
  { theme: "Kingdom of God", desc: "Jesus's primary announcement: 'The kingdom of God has come near' (Mark 1:15). The kingdom is God's reign breaking into history — already present in Christ, not yet fully consummated. The NT is a narrative of kingdom advance, and the church lives between its inauguration and its full arrival.", refs: "Matthew 4:17, 13:1-52; Luke 17:20-21; Revelation 11:15" },
  { theme: "Justification by Faith", desc: "Paul's central theological contribution: sinners are declared righteous before God not by their works but by faith in Christ, who bore their penalty. This teaching, recovered by the Reformers, is the engine of the gospel's liberating power and the foundation of Christian assurance.", refs: "Romans 3:21-26, 4:1-25; Galatians 2:16, 3:6-14; Philippians 3:9" },
  { theme: "The New Covenant", desc: "Jeremiah's promised New Covenant (31:31-34) is fulfilled in Christ — particularly in his Last Supper saying ('This cup is the new covenant in my blood,' Luke 22:20) and in Hebrews' extended argument that Christ mediates a better covenant. The Spirit's work and the forgiveness of sins are the marks of this new covenant.", refs: "Luke 22:20; 2 Corinthians 3:6; Hebrews 8:6-13, 9:15" },
  { theme: "Resurrection and New Creation", desc: "The resurrection of Jesus is not an isolated miracle but the beginning of the new creation — the first installment of the resurrection of all who are in Christ. The NT ends not in heaven but in a new heaven and earth, with God dwelling among his people in embodied glory.", refs: "1 Corinthians 15:20-28; 2 Corinthians 5:17; Romans 8:19-23; Revelation 21-22" },
  { theme: "The Holy Spirit", desc: "The gift of the Spirit at Pentecost marks the beginning of the new covenant era. The Spirit is not a force but the third person of the Trinity — the one who convicts, regenerates, indwells, sanctifies, gifts, and seals. The Christian life is life in the Spirit.", refs: "John 14-16; Acts 2; Romans 8; Galatians 5:16-25; Ephesians 1:13-14" },
];

const SCHOLARS = [
  {
    id: "bruce",
    name: "F.F. Bruce",
    era: "1910 – 1990",
    context: "British NT scholar, The New Testament Documents: Are They Reliable?",
    bio: "Frederick Fyvie Bruce was the most widely read evangelical NT scholar of the twentieth century — a man who combined rigorous historical scholarship with unwavering evangelical conviction. His The New Testament Documents: Are They Reliable? (1943) remains the standard popular introduction to the historical case for the NT's reliability, covering manuscript evidence, the date of the documents, the authorship of the Gospels, and the external evidence from non-Christian sources. His commentaries on Acts, Romans, 1-2 Corinthians, Galatians, Hebrews, and Colossians shaped a generation of evangelical students. He held chairs at Sheffield and Manchester and was simultaneously known for his extraordinary linguistic range and his personal humility.",
    quote: "The earliest propagators of Christianity welcomed the fullest examination of the credentials of their message. The historical 'once-for-all-ness' of Christianity was both its strength and its vulnerability.",
    contribution: "Bruce gave evangelical NT scholarship its intellectual credibility in the mid-twentieth century at a time when many academics assumed that rigorous historical work required abandoning evangelical conclusions. His work demonstrated that the NT documents could bear the full weight of historical scrutiny and emerge more, not less, trustworthy. His willingness to engage critical scholarship without capitulating to its methodological naturalism showed that faith and evidence were allies, not enemies.",
  },
  {
    id: "fee",
    name: "Gordon Fee",
    era: "1934 – 2022",
    context: "American Pentecostal NT scholar, How to Read the Bible for All Its Worth",
    bio: "Gordon Fee was a rigorous NT scholar and a committed Pentecostal Christian whose unusual combination shaped both his scholarship and his pedagogy. His How to Read the Bible for All Its Worth (co-authored with Douglas Stuart, 1982) became the standard introduction to hermeneutics in evangelical colleges and seminaries worldwide — accessible without being simplistic. His massive 1 Corinthians commentary (NICNT, 1987) remains the standard evangelical treatment. His Paul, the Spirit, and the People of God (1996) made his technical pneumatology accessible to non-specialists. He was known for insisting that exegesis required both the Spirit and the intellect — that the same Spirit who inspired the text illumines the reader.",
    quote: "The aim of good Bible reading is not to read more of the Bible but to read it better — to let the text in its own context say what it means to say, and then to let that word address us in our own context.",
    contribution: "Fee's How to Read the Bible remains the most widely assigned hermeneutics text in evangelical education, having shaped millions of Christians in the basic principles of contextual, genre-sensitive biblical interpretation. His insistence that the same Spirit who inspired Scripture illumines its readers — combined with his rigorous attention to the human, historical, and cultural dimensions of the text — modeled an evangelical scholarship that took both the divine and human aspects of Scripture with equal seriousness.",
  },
  {
    id: "wright",
    name: "N.T. Wright",
    era: "Born 1948",
    context: "British NT scholar and bishop, Christian Origins and the Question of God series",
    bio: "N.T. Wright is the most prolific and influential NT scholar of his generation — with an unusual ability to move between technical scholarship and popular communication. His five-volume Christian Origins and the Question of God series (The New Testament and the People of God, Jesus and the Victory of God, The Resurrection of the Son of God, Paul and the Faithfulness of God, and Paul and His Recent Interpreters) constitutes the most comprehensive attempt in decades to read the NT in its first-century Jewish context. His central argument: Jesus and Paul must be read against the backdrop of Second Temple Judaism and its hopes for Israel's restoration — not abstracted into timeless spiritual principles. His popular books (Surprised by Hope, Simply Christian, The Day the Revolution Began) have made his technical conclusions accessible to millions.",
    quote: "Jesus announced the kingdom of God and the early church announced Jesus — and the connection between these two proclamations is not obvious. My life's work has been to show that it is, in fact, the same proclamation.",
    contribution: "Wright recovered the Jewish context of the NT in a way that has transformed evangelical reading of both Jesus and Paul. His rereading of Paul's 'justification by faith' — not as the doctrine that individuals are declared righteous (though it includes that) but as the declaration that Jews and Gentiles together are members of the one covenant family — sparked the New Perspective on Paul controversy and forced a generation of scholars to re-examine their assumptions. His work on the resurrection is the most comprehensive apologetic case for the bodily resurrection of Jesus in modern scholarship.",
  },
  {
    id: "bauckham",
    name: "Richard Bauckham",
    era: "Born 1946",
    context: "British NT scholar, Jesus and the Eyewitnesses (2006)",
    bio: "Richard Bauckham's Jesus and the Eyewitnesses (2006) challenged the form-critical consensus that the Gospels preserve anonymous community traditions rather than eyewitness testimony. Drawing on ancient historiography, the names embedded in the Gospel texts, and the pattern of named individuals, Bauckham argued that the Gospels are grounded in the testimony of specific eyewitnesses — many of whom were alive when the Gospels were written and could be consulted or challenged. His work on Revelation (The Theology of the Book of Revelation) showed how the book's rich OT tapestry creates a vision of God's justice and ultimate victory for persecuted churches. His God Crucified (1998) traced the 'divine identity Christology' in the NT — Jesus is included within the identity of the one God of Israel from the earliest layers of the tradition.",
    quote: "The Gospels are not community documents that happened to be attributed to eyewitnesses. They are eyewitness testimony that happens to have been preserved in community — testimony by those who were there.",
    contribution: "Bauckham's eyewitness argument has been the most significant challenge to form-critical assumptions in decades. By demonstrating that ancient historiography expected authors to cite specific named sources — and that the Gospels do exactly this — he provided a historically grounded case for the Gospels' reliability that does not require theological presuppositions. His divine identity Christology has also reshaped NT Christological scholarship, showing that the highest views of Jesus's identity are not late developments but are embedded in the earliest tradition.",
  },
  {
    id: "mcknight",
    name: "Scot McKnight",
    era: "Born 1953",
    context: "American NT scholar, The King Jesus Gospel (2011)",
    bio: "Scot McKnight teaches at Northern Seminary and has spent his career at the intersection of rigorous NT scholarship and accessible Christian education. His The King Jesus Gospel (2011) made a simple but consequential argument: the evangelical church has confused the gospel with the plan of salvation. The gospel in the NT (1 Corinthians 15:1-5, Romans 1:1-4) is the announcement of the story of Jesus — his life, death, resurrection, and lordship as the fulfillment of Israel's story — not a formula for individual salvation. Salvation is what happens when people respond to the gospel. Getting this distinction right changes how we preach, how we evangelize, and how we understand discipleship. His The Jesus Creed recovered love of God and neighbor as the organizing center of the Christian life.",
    quote: "We have taken the gospel and reduced it to a mechanism that pops individuals into salvation — when the gospel in the NT is the royal announcement that Jesus is Lord, and that announcement calls for allegiance, not just a decision.",
    contribution: "McKnight has reshaped evangelical thinking about both the gospel and discipleship. His distinction between gospel and plan of salvation clarified why so many evangelical churches produce converts who don't become disciples: if the gospel is only about getting saved rather than the announcement of a king who demands allegiance, discipleship will always feel like an optional extra. His accessible writing on the historical Jesus, the Sermon on the Mount, and the atonement has made serious NT scholarship available to pastors and lay people who would not read academic volumes.",
  },
];

const READING_GUIDE = [
  { section: "Start with Luke and Acts", icon: "🌅", desc: "Luke and Acts form a single two-volume work — the only NT author who tells the story from Jesus's birth to Paul's arrival in Rome. Reading them together gives you the best narrative arc of the whole NT story: the life of Jesus, the birth of the church, the spread of the gospel. Read Luke slowly, then move directly into Acts." },
  { section: "Read Mark Next", icon: "⚡", desc: "Mark's Gospel is the shortest (16 chapters) and the most action-packed — the word 'immediately' appears 41 times. Reading it in one or two sittings gives you the kinetic, urgent feel of the earliest Gospel account. Notice what gets emphasized (healings, exorcisms, misunderstanding disciples) and what's absent (birth narrative, Sermon on the Mount)." },
  { section: "Then John, Then Matthew", icon: "✝️", desc: "After the Synoptic Gospels, read John — the most theological, the most distinctive. John covers only 20 days of Jesus's ministry in detail, with long discourses and seven 'I am' statements. Then read Matthew for the fullest teaching collection (Sermon on the Mount, parables, mission discourse) and the strongest Jewish-Christian connections." },
  { section: "Paul: Start Small, Then Romans", icon: "📝", desc: "Don't start Pauline reading with Romans — it's his densest letter. Start with Galatians (his most passionate), then Philippians (his most joyful), then 1 Corinthians (his most practical). After those three, you'll have the vocabulary to read Romans, which synthesizes his theology most completely." },
  { section: "Read Hebrews With the OT", icon: "🔗", desc: "Hebrews is incomprehensible without knowledge of Leviticus, Psalms, and the OT sacrificial system. Read Leviticus 16 (Day of Atonement), then Psalm 110 and Psalm 2, then Hebrews. The argument — that Christ is the superior high priest who offers the superior sacrifice — suddenly becomes luminous." },
  { section: "Revelation Last — And Slowly", icon: "🌅", desc: "Read Revelation after you know the OT prophets (Ezekiel, Daniel, Zechariah) and after you understand the historical context (Roman imperial persecution of Christians, ~95 AD). Come to it expecting vision and symbol, not literal prediction. The central question is: who is sovereign — Caesar or the Lamb? The answer is already decided; the book invites you to live from that certainty." },
];

type Tab = "sections" | "themes" | "scholars" | "reading" | "videos";

export default function NewTestamentSurveyPage() {
  const [activeTab, setActiveTab] = usePersistedState<Tab>("vine_new-testament-survey_tab", "sections");
  const [selected, setSelected] = useState("Gospels");
  const [selectedScholar, setSelectedScholar] = useState("bruce");

  const section = SECTIONS.find(s => s.name === selected)!;
  const scholar = SCHOLARS.find(s => s.id === selectedScholar)!;

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: 80 }}>
      <Navbar />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 20px 60px" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>✝️</div>
          <h1 style={{ fontSize: 32, fontWeight: 900, marginBottom: 8 }}>New Testament Survey</h1>
          <p style={{ color: MUTED, fontSize: 16, maxWidth: 560, margin: "0 auto" }}>
            27 books spanning the life of Christ, the birth of the church, and the vision of the age to come — written within the first century after the resurrection by eyewitnesses and their companions.
          </p>
        </div>

        <div style={{ display: "flex", gap: 6, marginBottom: 32, background: CARD, borderRadius: 12, padding: 6, border: `1px solid ${BORDER}` }}>
          {[
            { id: "sections" as const, label: "Sections", icon: "📚" },
            { id: "themes" as const, label: "Themes", icon: "🧵" },
            { id: "scholars" as const, label: "Scholars", icon: "🧠" },
            { id: "reading" as const, label: "Reading Guide", icon: "🗺️" },
            { id: "videos" as const, label: "Videos", icon: "🎬" },
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
                These {THEMES.length} themes are the backbone of the New Testament's theological vision — essential for reading any part of the NT in its larger context.
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
                The order you read the NT matters. These {READING_GUIDE.length} principles will help you read with more context, more connection, and more depth — rather than plowing through from Matthew to Revelation and missing the logic of each book.
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

        {activeTab === "videos" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22, marginBottom: 24 }}>
              <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>
                Video lectures and teachings on the New Testament — its structure, books, themes, and how to read it well.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
              {[
                { id: "cRmWSB1c6L8", title: "How to Study the Bible", teacher: "R.C. Sproul" },
                { id: "Io4iprqK5y0", title: "New Testament Survey — Introduction", teacher: "Academic Lecture" },
                { id: "N4WkOkKu9nA", title: "Why Study the Bible?", teacher: "R.C. Sproul" },
                { id: "xXMO6DV8F_s", title: "New Testament Survey — Overview", teacher: "Lakeside Institute of Theology" },
              ].map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
                  <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    />
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ color: TEXT, fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ color: MUTED, fontSize: 12 }}>{v.teacher}</div>
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
