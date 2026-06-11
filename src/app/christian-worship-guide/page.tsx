"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#F59E0B", TEXT = "#F2F2F8", MUTED = "#9898B3";

type WPEntry = { id: string; date: string; element: string; meaning: string; practice: string };

export default function ChristianWorshipGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<WPEntry[]>(() => {
    try { const s = localStorage.getItem("vine_christianworship_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jElement, setJElement] = useState("");
  const [jMeaning, setJMeaning] = useState("");
  const [jPractice, setJPractice] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianworship_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jElement.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), element: jElement, meaning: jMeaning, practice: jPractice }, ...prev]);
    setJElement(""); setJMeaning(""); setJPractice("");
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Church &amp; Ministry</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Christian Worship Guide
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Worship is not a warm-up act before the sermon &mdash; it is the central act of the gathered church. &ldquo;God is spirit, and those who worship him must worship in spirit and truth&rdquo; (John 4:24). This guide explores the theology, elements, and rhythms of corporate and private Christian worship.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? ACCENT : BORDER, background: tab === t.id ? ACCENT + "22" : "transparent", color: tab === t.id ? ACCENT : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              {
                title: "Worship in Spirit and Truth &mdash; The Foundation (John 4:24)",
                body: "God is spirit, and those who worship him must worship in spirit and truth. Jesus&rsquo;s conversation with the Samaritan woman dismantles every location-based, ritual-first understanding of worship. True worship is not about a mountain or a temple; it is a matter of the inner person (&ldquo;spirit&rdquo;) aligned with revealed reality (&ldquo;truth&rdquo;). Worshipping &ldquo;in spirit&rdquo; means the whole person &mdash; not just the outward form &mdash; is engaged: desire, attention, affection, will. Worshipping &ldquo;in truth&rdquo; means our worship is shaped by who God actually is rather than a projection of who we wish him to be. Neither sincerity without truth nor orthodoxy without genuine engagement satisfies this standard.",
              },
              {
                title: "Why We Worship &mdash; The Purpose of Doxology (Rev 4:11)",
                body: "Worthy are you, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they existed and were created. Worship is the creature&rsquo;s proper response to the Creator &mdash; an acknowledgment of reality rather than a transaction or performance. John Piper&rsquo;s famous formulation &mdash; &ldquo;God is most glorified in us when we are most satisfied in him&rdquo; &mdash; captures an important truth: genuine worship is not reluctant duty but joyful delight. The heavenly worship of Revelation 4&ndash;5 is the template: it is ceaseless, it is grounded in specific attributes and acts of God, and it moves from contemplation to proclamation. Corporate worship is a rehearsal of and participation in that reality.",
              },
              {
                title: "The Lord&rsquo;s Day &mdash; Corporate Worship and the Christian Week (Acts 20:7; Rev 1:10)",
                body: "On the first day of the week, when we were gathered together to break bread, Paul talked with them. The early church gathered on the first day of the week &mdash; the day of resurrection &mdash; to hear Scripture, break bread, and pray (Acts 2:42). Sunday is not the Sabbath renamed; it is a new day shaped by new creation. The Lord&rsquo;s Day frames the entire week: Christians gather at the beginning of the week to be formed by Word and sacrament, then scatter to live out what they have received. Missing corporate worship habitually is not merely a spiritual discipline failure; it is a disconnection from the body (Heb 10:24-25) and a loss of the formative pattern God has given his people.",
              },
              {
                title: "Liturgy vs. Contemporary Worship &mdash; Form and Freedom",
                body: "The debate between liturgical and contemporary worship is often framed as tradition vs. spontaneity, but the real question is: what forms best shape us toward God? All worship has form &mdash; the question is which forms are theologically rich and pastorally wise. Liturgical worship offers the gifts of continuity with the historic church, catechetical density (creed, confession, benediction), and protection against the tyranny of the worship leader&rsquo;s personality. Contemporary worship, at its best, offers accessibility, musical vernacular, and emotional expressiveness. The Reformers retained substantial liturgical form; the Puritans stripped it back; the Wesleyan revival added emotional expressiveness. Wisdom draws on all these streams.",
              },
              {
                title: "Private vs. Corporate Worship &mdash; Two Wings of One Bird",
                body: "The New Testament assumes both private devotion (Matt 6:6, &ldquo;when you pray, go into your room and shut the door&rdquo;) and corporate worship (Heb 10:25, &ldquo;not neglecting to meet together&rdquo;). Neither substitutes for the other. Private worship without corporate accountability easily drifts into self-referential spirituality shaped more by personal preference than by the whole counsel of God. Corporate worship without private devotion becomes a performance participated in rather than a life lived. The two forms feed each other: corporate worship sets the theological grammar; private worship applies it daily. Healthy Christian formation requires both.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }} dangerouslySetInnerHTML={{ __html: item.title }} />
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Practices</h2>
            {[
              "Arrive to corporate worship with intention rather than habit: spend one minute before the service in silent prayer, naming what you are bringing before God and what you are asking him to do in you through the gathering.",
              "Sing &mdash; actually sing. The psalms command it repeatedly (Ps 100:2), Paul commands it (Eph 5:19; Col 3:16), and the early church was marked by it. If the congregation&rsquo;s musical style is unfamiliar, focus on the words and offer them as your prayer even if the tune is imperfect.",
              "Receive the Lord&rsquo;s Supper with full attention: before taking the bread and cup, pause and name one specific thing Christ&rsquo;s death accomplished for you. Let the physical act of eating and drinking anchor the theological reality in your body.",
              "Practice a daily rhythm of private worship: morning praise (even a single psalm or hymn verse), midday awareness of God&rsquo;s presence, and evening gratitude. The Daily Office traditions (fixed-hour prayer) exist precisely to sanctify the hours of the day.",
              "Study the elements of your church&rsquo;s worship order and ask: why does this come here? What does this do? Understanding the architecture of your liturgy or service order transforms passive attendance into active participation.",
            ].map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ background: ACCENT + "22", color: ACCENT, fontWeight: 800, borderRadius: "50%", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.9rem" }}>{i + 1}</div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: p }} />
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Voices</h2>
            {[
              {
                name: "A.W. Tozer",
                work: "The Pursuit of God",
                quote: "The whole transaction of religious conversion has been made mechanical and spiritless. Faith may now be exercised without a jar to the moral life and without embarrassment to the Adamic ego. Christ may be &lsquo;received&rsquo; without creating any special love for Him in the soul of the receiver. The man is &lsquo;saved,&rsquo; but he is not hungry nor thirsty after God. In fact he is specifically taught to be satisfied and encouraged to be content.",
                bio: "A.W. Tozer was a pastor and editor of Alliance Life magazine whose writings on the interior life of God-pursuit have shaped evangelical spirituality across generations. His insistence that worship must be affective as well as doctrinal &mdash; that genuine encounter with God produces awe, longing, and transformation &mdash; remains a prophetic corrective to nominal Christianity. The Pursuit of God is among the most widely-read devotional books of the 20th century.",
              },
              {
                name: "John Calvin",
                work: "Institutes of the Christian Religion",
                quote: "The Word of God is the rule by which all worship of him must be tested; for as he is an incomprehensible Spirit, so he requires a spiritual worship of us, such as may correspond with his nature. When, therefore, men presume to introduce into the worship of God any invention of their own, they defile and corrupt it.",
                bio: "John Calvin was the Genevan Reformer whose theological system shaped Reformed and Presbyterian Christianity globally. His principle of the &ldquo;regulative principle of worship&rdquo; &mdash; that corporate worship should contain only what Scripture explicitly commands or clearly implies &mdash; has shaped liturgical debate for five centuries. Calvin&rsquo;s own Geneva liturgy was carefully crafted around Scripture reading, preaching, prayer, and the Psalms sung metrically by the entire congregation.",
              },
              {
                name: "Robert Webber",
                work: "Worship Is a Verb",
                quote: "Worship is not something we watch. Worship is something we do. And because worship is something we do &mdash; an action &mdash; it requires participation, engagement, the whole self. The question is not whether the service was good, as though we were audience and the worship team were performers. The question is whether we offered ourselves.",
                bio: "Robert Webber was a theologian and professor at Wheaton College and Northern Seminary who pioneered the &ldquo;Ancient-Future&rdquo; worship movement &mdash; a recovery of patristic and liturgical patterns within evangelical churches. His extensive writings on worship theology challenged both the spectator model of contemporary megachurch worship and the sterility of some traditional services, calling the whole congregation to active, embodied, participatory offering.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em>{v.work}</em></div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;<span dangerouslySetInnerHTML={{ __html: v.quote }} />&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: v.bio }} />
              </div>
            ))}
          </div>
        )}

        {/* SCRIPTURE */}
        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Scripture</h2>
            {[
              {
                ref: "John 4:24",
                text: "God is spirit, and those who worship him must worship in spirit and truth.",
                insight: "The word &ldquo;must&rdquo; (Greek <em>dei</em>) is a necessity of nature, not just a preference. Worship that is outwardly correct but inwardly disengaged fails this standard equally with worship that is enthusiastic but doctrinally hollow.",
              },
              {
                ref: "Psalm 100:1-4",
                text: "Shout for joy to the Lord, all the earth. Worship the Lord with gladness; come before him with joyful songs. Know that the Lord is God. It is he who made us, and we are his; we are his people, the sheep of his pasture. Enter his gates with thanksgiving and his courts with praise; give thanks to him and praise his name.",
                insight: "This psalm gives the grammar of corporate entry into worship: joyful noise, knowledge of who God is, and movement through gates and courts with thanksgiving. Worship is oriented, purposeful, and joyful &mdash; not passive attendance.",
              },
              {
                ref: "Hebrews 10:24-25",
                text: "And let us consider how to stir up one another to love and good works, not neglecting to meet together, as is the habit of some, but encouraging one another, and all the more as you see the Day drawing near.",
                insight: "Corporate worship is not optional for the spiritually mature &mdash; it is the means by which we stir one another up. The word &ldquo;consider&rdquo; suggests intentional, deliberate investment in the community&rsquo;s worship life, not mere attendance.",
              },
              {
                ref: "Colossians 3:16",
                text: "Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.",
                insight: "Paul connects singing directly to Scripture dwelling in us richly. The three categories &mdash; psalms, hymns, spiritual songs &mdash; suggest a breadth of musical expression, but all anchored in the word of Christ, not free-floating spiritual feeling.",
              },
              {
                ref: "Revelation 4:8-11",
                text: "Holy, holy, holy, is the Lord God Almighty, who was and is and is to come! &hellip; Worthy are you, our Lord and God, to receive glory and honor and power, for you created all things, and by your will they existed and were created.",
                insight: "The heavenly worship of Revelation is the model: it is grounded in specific attributes (holiness, eternity, omnipotence) and specific acts (creation). Worship that is not anchored in who God is and what he has done easily becomes self-expressive rather than genuinely doxological.",
              },
              {
                ref: "Romans 12:1",
                text: "I appeal to you therefore, brothers, by the mercies of God, to present your bodies as a living sacrifice, holy and acceptable to God, which is your spiritual worship.",
                insight: "The Greek <em>logiken latreian</em> &mdash; &ldquo;spiritual worship&rdquo; or &ldquo;reasonable service&rdquo; &mdash; refers to the whole-life offering of the body in daily obedience. The gathered service on Sunday is the concentrated expression of a life that is itself continuous worship.",
              },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 0.65rem" }} dangerouslySetInnerHTML={{ __html: s.text }} />
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.insight }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Worship Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What element of worship are you reflecting on?</label>
                  <textarea
                    value={jElement}
                    onChange={e => setJElement(e.target.value)}
                    placeholder="e.g. singing, the Lord&apos;s Supper, corporate confession, Scripture reading..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What does this element mean and accomplish?</label>
                  <textarea
                    value={jMeaning}
                    onChange={e => setJMeaning(e.target.value)}
                    placeholder="What theological reality does this element express or enact?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>How will you engage it more fully this week?</label>
                  <textarea
                    value={jPractice}
                    onChange={e => setJPractice(e.target.value)}
                    placeholder="A specific intention for Sunday, or a daily devotional practice..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
              </div>
              <button onClick={saveEntry} style={{ marginTop: "1rem", padding: "0.6rem 1.5rem", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", cursor: "pointer", fontWeight: 700, fontSize: "0.93rem" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.82rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.82rem" }}>Delete</button>
                </div>
                {e.element && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Worship Element</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.element}</p></div>}
                {e.meaning && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Meaning</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.meaning}</p></div>}
                {e.practice && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Practice</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.practice}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="HgGsIBVNnmk" title="What Is Christian Worship? The Theology of Worship" />
            <VideoEmbed videoId="OfobqHsVpmo" title="Worship in Spirit and Truth &mdash; John 4:24 Explained" />
            <VideoEmbed videoId="3kMNdHpG4rE" title="Why Corporate Worship Matters: The Lord&rsquo;s Day and the Gathered Church" />
            <VideoEmbed videoId="Q5vgDNtAeKQ" title="Liturgy vs. Contemporary Worship &mdash; What Does the Bible Say?" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
