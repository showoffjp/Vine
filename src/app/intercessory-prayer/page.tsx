"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", BLUE = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "What Is Intercessory Prayer? — Standing in the Gap for Others", verse: "Ezekiel 22:30", text: "I looked for someone among them who would build up the wall and stand before me in the gap on behalf of the land so I would not have to destroy it, but I found no one. Intercession is the act of approaching God on behalf of another person or situation — standing between that person and their need, and bringing it before God in prayer. The image of 'standing in the gap' (Ezek 22:30) captures the posture: the intercessor places themselves between a broken situation and a holy God, asking for mercy, healing, or intervention. This is one of the most ancient expressions of prayer in Scripture, modeled by Abraham (Gen 18), Moses (Exod 32), and every major prophet." },
  { title: "The Intercession of Christ — Our High Priest Who Pleads for Us", verse: "Romans 8:34", text: "Christ Jesus who died — more than that, who was raised to life — is at the right hand of God and is also interceding for us. Before we intercede for others, we must know that Someone is interceding for us. The risen Christ is at the Father's right hand, ever living to make intercession (Heb 7:25). Our intercessory prayer is not generating something unprecedented — it is joining an eternal, ongoing intercession already taking place. When we pray for others, we participate in what Christ himself is doing. This is the most encouraging foundation for intercessory ministry: we do not intercede alone, and our prayers do not need to persuade a reluctant God — we pray to a Father already committed to the good of his children." },
  { title: "The Holy Spirit Intercedes — When We Do Not Know How to Pray", verse: "Romans 8:26-27", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans. And he who searches our hearts knows the mind of the Spirit, because the Spirit intercedes for God's people in accordance with the will of God. Intercessory prayer is Trinitarian at its core: the Father to whom we pray, the Son who intercedes from the throne, and the Spirit who intercedes within us and through us. When we do not know what to pray for someone — when the need is too complex, or grief too deep for words — the Spirit takes what is inarticulate in us and brings it before the Father in perfect alignment with God's will. We do not need to have the right words; we need only to show up." },
  { title: "The Prayers of the Saints — Intercession Has Cosmic Weight", verse: "Revelation 8:3-4", text: "Another angel, who had a golden censer, came and stood at the altar. He was given much incense to offer, with the prayers of all God's people, on the golden altar in front of the throne. The smoke of the incense, together with the prayers of God's people, went up before God from the angel's hand. The book of Revelation gives intercessory prayer a breathtaking dignity: the prayers of God's people are presented before the throne in golden censers, mingled with incense, rising as worship before the Almighty. This image demolishes the notion that prayer is a minor activity, a preliminary to real work. In God's economy, intercessory prayer is power — it moves heaven, precedes judgment, and participates in God's sovereign purposes for history." },
  { title: "Persistent Intercession — Why We Keep Praying When Nothing Changes", verse: "Luke 18:1-8", text: "Then Jesus told his disciples a parable to show them that they should always pray and not give up. The parable of the persistent widow is Jesus's explicit teaching on not abandoning intercessory prayer when answers are delayed. The widow's perseverance is not nagging a reluctant God into compliance — it is the posture of faith that believes God's ultimate justice will come and refuses to abandon that conviction. Persistent intercession is not working harder to persuade God; it is refusing to accept the apparent reality as the final word, staying aligned with the God who promises to vindicate his chosen ones." },
];

const methods = [
  { icon: "📋", title: "Prayer Lists and Journals — Organizing Intercession for Faithfulness", text: "Most intercessors find that they cannot hold all their prayer concerns in their head. A prayer list — whether physical or digital — enables systematic, faithful intercession across a range of people and situations. Common structures: daily categories (self/family, church, nation, world), weekly rotating lists (different people each day of the week), and seasonal lists (specific needs in a specific season). Prayer journals add a dimension of recording what was prayed and noting answers over time — a practice that builds faith by demonstrating God's faithfulness across years." },
  { icon: "🙌", title: "Praying Scripture — Using God's Words Back to Him", text: "One of the most powerful methods of intercession is praying Scripture directly for people. Identify a passage that speaks to the person's need — Ephesians 3:16-19 for someone who needs to know God's love, Philippians 4:7 for someone in anxiety, Psalm 23 for someone walking through darkness — and pray it aloud with their name inserted. This method avoids vague, repetitive intercession; it anchors prayer in the revealed will of God; and it aligns the intercessor's heart with Scripture." },
  { icon: "⏰", title: "Prayer Watches — Structured Hours of Intercession", text: "The ancient tradition of the 'prayer watch' (derived from the military watch system in 3-hour increments) invites intercessors to take specific hours of prayer — often in the early morning or late night — when the world is quiet. Groups of intercessors coordinating around the clock 24/7 have been models of sustained intercession throughout church history. Individuals can commit to a specific hour each day for concentrated intercessory prayer." },
  { icon: "✍️", title: "Writing Prayers — Slowing Down, Going Deep", text: "Many intercessors find that writing their prayers — not just thinking or speaking them — slows the mind, deepens concentration, and leads to more specific, faith-filled intercession. Written prayers become a record of what was asked, enabling the joy of recording answered prayers later. The discipline of writing also clarifies vague concerns into specific requests: instead of 'pray for my friend' the intercessor must articulate what specifically they are asking God to do." },
  { icon: "🤝", title: "Prayer Partners and Prayer Triplets — Interceding Together", text: "Matthew 18:19 — 'If two of you on earth agree about anything they ask for, it will be done for them by my Father in heaven.' Intercessory prayer partnerships carry a biblical promise. Prayer triplets (groups of three who meet regularly to pray for specific people and needs) have been one of the most reproducible and effective structures for sustained intercession in local churches. The accountability of regular partnership also prevents intercessory practice from drifting." },
];

const scriptures = [
  { verse: "1 Timothy 2:1-2", text: "I urge, then, first of all, that petitions, prayers, intercession and thanksgiving be made for all people — for kings and all those in authority, that we may live peaceful and quiet lives in all godliness and holiness." },
  { verse: "Romans 8:26-27", text: "The Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Hebrews 7:25", text: "Therefore he is able to save completely those who come to God through him, because he always lives to intercede for them." },
  { verse: "Ezekiel 22:30", text: "I looked for someone among them who would build up the wall and stand before me in the gap on behalf of the land so I would not have to destroy it, but I found no one." },
  { verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective." },
  { verse: "Colossians 4:12", text: "Epaphras, who is one of you and a servant of Christ Jesus, sends greetings. He is always wrestling in prayer for you, that you may stand firm in all the will of God, mature and fully assured." },
];

const voices = [
  { id: "ec", name: "E.M. Bounds", role: "Author, Power Through Prayer; 19th-Century Minister of Prayer", quote: "God shapes the world by prayer. The more praying there is in the world the better the world will be, the mightier the forces against evil. Prayer is not learned in a classroom but in the closet. It is not theory to be grasped but an art to be practiced. The mightiest intercessors are those who have simply prayed more than others.", bio: "E.M. Bounds wrote eleven books on prayer during his lifetime, most of which were published posthumously. His work remains among the most theologically serious and practically demanding writing on intercessory prayer available. His central conviction — that God accomplishes his purposes through the prayers of his people — has shaped generations of prayer leaders." },
  { id: "dj", name: "Dutch Sheets", role: "Author, Intercessory Prayer; Teacher on Prophetic Intercession", quote: "Intercession is not just asking God to do things. It is partnering with God in what he already desires to do. The intercessor does not need to convince God — God is more zealous for the people we pray for than we are. The intercessor needs to align themselves with that zeal and give it legal expression on earth through prayer.", bio: "Sheets's Intercessory Prayer has become a standard text in evangelical prayer circles. He draws on a combination of biblical theology, church history, and personal experience to build a comprehensive theology of intercession that takes seriously both divine sovereignty and human partnership. His framework of 'prayer as legal authority on earth' has been both influential and sometimes debated." },
  { id: "pc", name: "Pete Greig", role: "Founder, 24-7 Prayer; Author, How to Pray", quote: "You don't have to be spiritual to intercede — you just have to care. The prayer room is not reserved for the religious elite; it is for anyone who is willing to show up and say: I care about this person, this situation, this world. And I believe that God cares too. That intersection of my care and God's power is intercession.", bio: "Greig is the founder of the 24-7 Prayer movement, which since 1999 has spread to thousands of prayer rooms in more than 100 countries. His practical, accessible approach to prayer — and especially to intercession — has revived sustained prayer practices in many churches. His book Dirty Glory chronicles the global impact of continuous intercessory prayer communities." },
];

const videos = [
  { id: "F8SqxnC7bB8", title: "The Power of Intercessory Prayer" },
  { id: "5gsBhB1AGGE", title: "Dutch Sheets: Understanding Intercession" },
  { id: "TwYe8_0RQBM", title: "How to Build a Prayer List that Works" },
  { id: "9w1nBCpI8TI", title: "24-7 Prayer: Why Intercessory Prayer Matters" },
];

type IPEntry = { id: string; date: string; person: string; request: string; answer: string };

export default function IntercessoryPrayerPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<IPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_intercession_entries") ?? "[]"); } catch { return []; }
  });
  const [jPerson, setJPerson] = useState("");
  const [jRequest, setJRequest] = useState("");
  const [jAnswer, setJAnswer] = useState("");

  useEffect(() => { localStorage.setItem("vine_intercession_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jPerson.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), person: jPerson, request: jRequest, answer: jAnswer }, ...prev]);
    setJPerson(""); setJRequest(""); setJAnswer("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "methods", label: "Methods" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Prayer List" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Prayer</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Intercessory Prayer</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Standing in the gap for others — the theology, methods, and practice of praying for people and situations beyond yourself.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? BLUE : BORDER}`, background: tab === t.id ? BLUE + "22" : "transparent", color: tab === t.id ? BLUE : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: BLUE, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "methods" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {methods.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: BLUE, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${BLUE}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: BLUE, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Prayer Log</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Track your intercessory requests and record answers to prayer over time.</p>
            {[
              { label: "Person or Situation (who or what are you praying for?)", val: jPerson, set: setJPerson },
              { label: "Specific Request (what exactly are you asking God to do?)", val: jRequest, set: setJRequest },
              { label: "Answer / Update (leave blank until you see something)", val: jAnswer, set: setJAnswer },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={i === 0 ? 2 : 3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: BLUE, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Add to Prayer List</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: 12 }}>
                <h4 style={{ fontWeight: 600, color: BLUE, marginBottom: 4 }}>Active Prayer List ({entries.length})</h4>
                {entries.map(e => (
                  <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: "0.9rem" }}>{e.person}</span>
                      <span style={{ fontSize: "0.78rem", color: MUTED }}>{e.date}</span>
                    </div>
                    {e.request && <p style={{ fontSize: "0.88rem", color: MUTED, marginBottom: 4 }}>Request: {e.request}</p>}
                    {e.answer && <p style={{ fontSize: "0.88rem", color: "#3a7d56" }}>Answer: {e.answer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: BLUE }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
