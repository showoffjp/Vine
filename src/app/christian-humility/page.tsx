"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

type HMEntry = { id: string; date: string; pride_pattern: string; truth: string; practice: string };

export default function ChristianHumilityPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<HMEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianhumility_entries") ?? "[]"); } catch { return []; }
  });
  const [jPride, setJPride] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jPractice, setJPractice] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianhumility_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jPride.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), pride_pattern: jPride, truth: jTruth, practice: jPractice }, ...prev]);
    setJPride(""); setJTruth(""); setJPractice("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Character &amp; Virtue</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Humility: The Christian Virtue
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Humility is not thinking less of yourself &mdash; it is thinking of yourself less. The kenotic pattern of Philippians 2 shows the shape of Christian character: the downward way of Jesus is the only way up. This guide explores the theology, practice, and voices of genuine humility.
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
                title: "The Kenotic Pattern &mdash; Philippians 2:5-11",
                body: "Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, taking the form of a servant. The Greek kenosis &mdash; self-emptying &mdash; is not the surrender of divine attributes but the refusal to leverage divine status for personal advantage. Jesus, fully God, chose the posture of a slave. Paul introduces this as the pattern all Christians are to imitate: the downward movement, the relinquishment of rights, the embrace of lowly service. Christian humility is not self-deprecation but a Christological posture &mdash; reorienting life around the interests and needs of others rather than oneself.",
              },
              {
                title: "God Opposes the Proud &mdash; James 4:6 and 1 Peter 5:5",
                body: "God opposes the proud but gives grace to the humble. The verb antitassetai (opposes) is military language &mdash; God arrays himself in battle formation against pride. This is not a passive divine disappointment but an active resistance. The humbling of the proud is not incidental in Scripture; it is a consistent pattern of divine governance. Hannah, Mary, and the Magnificat all celebrate this inversion: the mighty brought down, the humble exalted. James and Peter both cite Proverbs 3:34, showing that this principle runs through the entire canon. The appropriate human response is to humble ourselves under God&rsquo;s mighty hand, trusting that he will exalt in due time (1 Peter 5:6).",
              },
              {
                title: "Servant Leadership &mdash; Mark 10:42-45",
                body: "Whoever would be great among you must be your servant, and whoever would be first among you must be slave of all. For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many. The disciples&rsquo; argument over greatness reveals the default human operating system: status, rank, and being served. Jesus inverts the entire hierarchy. In his kingdom, authority is expressed through service, not dominance. The foot-washing of John 13 is not a sentimental gesture but a enacted parable: the Lord of lords takes the basin and towel. Leadership shaped by the cross looks nothing like leadership shaped by the world. Greatness in the kingdom is measured in the direction of one&rsquo;s movement &mdash; downward, toward the marginalized and least.",
              },
              {
                title: "False Humility vs. True &mdash; Colossians 2:18-23",
                body: "Let no one disqualify you, insisting on asceticism and worship of angels... These have indeed an appearance of wisdom in promoting self-made religion and asceticism and severity to the body, but they are of no value in stopping the indulgence of the flesh. Paul identifies a counterfeit: false humility. Voluntary poverty, excessive self-denial, and ostentatious lowliness can themselves become forms of pride. The monk who is proud of his fasting, the Christian who performs brokenness to gain spiritual status, the person who says &ldquo;I&rsquo;m nothing&rdquo; while secretly fishing for contradiction &mdash; these are forms of pride wearing humility&rsquo;s clothing. True humility does not advertise itself. C.S. Lewis observed that a truly humble person will not be what we call a humble person at all; they will be cheerful, curious, and interested &mdash; not in themselves.",
              },
              {
                title: "Humility in Spiritual Gifts &mdash; Romans 12:3-16",
                body: "For by the grace given to me I say to everyone among you not to think of himself more highly than he ought to think, but to think with sober judgment. The Greek hyperphronein &mdash; thinking too highly of oneself &mdash; is the particular danger that accompanies spiritual gifts. The one with conspicuous gifts is tempted to despise those with less visible ones; the one with leadership gifts looks down on the gift of service. Romans 12 places humility as the governing virtue for the entire exercise of spiritual gifts within the body. Sober judgment about oneself (sophrosyne) is not self-contempt but accurate self-assessment &mdash; seeing oneself as God sees, neither inflated nor deflated. The body image forbids comparison: the eye cannot do what the hand does; neither should it despise the hand.",
              },
              {
                title: "Dying to Self &mdash; John 12:24 and Galatians 2:20",
                body: "Truly, truly, I say to you, unless a grain of wheat falls into the earth and dies, it remains alone; but if it dies, it bears much fruit. The life of humility is a dying life &mdash; but a dying that is the condition of fruitfulness. Galatians 2:20 identifies the crucified life not as the cessation of selfhood but its transformation: I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. The self is not annihilated but relocated &mdash; it lives now in union with Christ rather than at the center of its own universe. Dying to self is the ongoing practice of releasing the anxious ego&rsquo;s grip on outcomes, reputation, and vindication, trusting God with what the ego would clutch.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
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
              "Practice the daily examen with specific attention to pride and self-promotion: at day&rsquo;s end, ask where you were building your own kingdom rather than God&rsquo;s, where you sought credit or recognition, and where you diminished or dismissed others.",
              "When you receive a compliment or credit for good work, practice the discipline of deflection &mdash; genuinely acknowledging the contributions of others, the grace of God, and the community that made the work possible &mdash; without false modesty.",
              "Identify a person in your community whose gifts or contributions you tend to overlook or undervalue. Find a concrete way this week to honor that person&rsquo;s contribution publicly.",
              "Practice the spiritual discipline of hiddenness: do one significant act of service this week that no one will know about. Notice what happens inside you when the good deed goes unrecognized.",
              "Read Philippians 2:1-11 daily for a week as a prayer. Before reading, ask God to show you where you are grasping rather than releasing. After reading, sit in silence for two minutes.",
              "When you are criticized or corrected, resist the immediate impulse to defend yourself. Instead, ask: is there truth in this? What would it look like to receive this with humility rather than defensiveness?",
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
                name: "C.S. Lewis",
                work: "Mere Christianity",
                quote: "Do not imagine that if you meet a really humble man he will be what most people call &lsquo;humble&rsquo; nowadays: he will not be a sort of greasy, smarmy person, who is always telling you that, of course, he is nobody. Probably all you will think about him is that he seemed a cheerful, intelligent chap who took a real interest in what you said to him. If you do dislike him it will be because you feel a little envious of anyone who seems to enjoy life so easily. He will not be thinking about humility: he will not be thinking about himself at all.",
                bio: "C.S. Lewis was an Oxford and Cambridge literary scholar and one of the most widely-read Christian apologists of the 20th century. His chapter on pride in Mere Christianity remains one of the most searching and widely-cited treatments of the subject, identifying pride as the complete anti-God state of mind &mdash; the root of every human failure. His portrait of genuine humility as self-forgetfulness rather than self-deprecation has shaped how millions understand the virtue.",
              },
              {
                name: "Andrew Murray",
                work: "Humility: The Beauty of Holiness",
                quote: "Humility is not so much a grace or virtue for which we are to strive, as it is the root of which all grace grows. It is the displacement of self by the enthronement of God. Where God is all, self is nothing. The humble person is not the one who thinks meanly of himself, but the one who has ceased to think of himself at all.",
                bio: "Andrew Murray was a 19th-century South African pastor and prolific devotional writer whose book Humility remains a classic of evangelical spirituality. Murray understood humility not as a virtue alongside others but as the foundational disposition from which all other Christian graces flow. His central thesis &mdash; that Jesus&rsquo;s humility is the source and model of all genuine Christian character &mdash; shaped the Keswick holiness movement and continues to influence contemplative evangelicalism.",
              },
              {
                name: "Thomas &Agrave; Kempis",
                work: "The Imitation of Christ",
                quote: "What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility? Verily it profiteth thee nothing. Better of a surety is a lowly peasant who serveth God, than a proud philosopher who watcheth the stars and neglecteth the knowledge of himself.",
                bio: "Thomas &agrave; Kempis was a 15th-century German-Dutch Augustinian monk whose Imitation of Christ is considered the most widely read Christian book after the Bible. His spirituality is relentlessly practical and anti-intellectual in the best sense &mdash; not dismissing the mind but insisting that self-knowledge and humble service to God are worth more than speculative theology unaccompanied by love. His vision of the interior life shaped mystical and evangelical spirituality alike.",
              },
              {
                name: "Dallas Willard",
                work: "The Divine Conspiracy",
                quote: "Spiritual formation in Christ is the process by which those who trust and follow Jesus take on his character... At its center is the transformation of the will or spirit &mdash; the deepest level of the self. And at the center of Christlike character is humility: the settled, pervasive conviction that I am not the most important person in any room, that others&rsquo; needs and dignity matter as much as mine, that God is the center and I am not.",
                bio: "Dallas Willard was a professor of philosophy at the University of Southern California and one of the most influential voices on Christian spiritual formation. His books The Spirit of the Disciplines and The Divine Conspiracy gave evangelical Christianity a rigorous philosophical and practical framework for understanding transformation. Willard consistently located humility as the hub virtue from which all other aspects of Christlikeness radiate.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }} dangerouslySetInnerHTML={{ __html: v.name }} />
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
              { ref: "Philippians 2:3-8", text: "Do nothing from selfish ambition or conceit, but in humility count others more significant than yourselves. Let each of you look not only to his own interests, but also to the interests of others. Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, by taking the form of a servant, being born in the likeness of men." },
              { ref: "James 4:6-10", text: "&ldquo;God opposes the proud but gives grace to the humble.&rdquo; Submit yourselves therefore to God. Resist the devil, and he will flee from you. Draw near to God, and he will draw near to you... Humble yourselves before the Lord, and he will exalt you." },
              { ref: "Matthew 23:11-12", text: "The greatest among you shall be your servant. Whoever exalts himself will be humbled, and whoever humbles himself will be exalted." },
              { ref: "1 Peter 5:5-6", text: "Clothe yourselves, all of you, with humility toward one another, for &ldquo;God opposes the proud but gives grace to the humble.&rdquo; Humble yourselves, therefore, under the mighty hand of God so that at the proper time he may exalt you." },
              { ref: "Micah 6:8", text: "He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?" },
              { ref: "Matthew 11:29", text: "Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls." },
              { ref: "John 13:14-15", text: "If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another&rsquo;s feet. For I have given you an example, that you also should do just as I have done to you." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.text }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Humility Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What pride pattern are you noticing in yourself?</label>
                  <textarea
                    value={jPride}
                    onChange={e => setJPride(e.target.value)}
                    placeholder="Where are you grasping, competing, or seeking recognition..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What truth about God or others corrects this pattern?</label>
                  <textarea
                    value={jTruth}
                    onChange={e => setJTruth(e.target.value)}
                    placeholder="What does Scripture or the example of Jesus say to this..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What concrete practice of humility will you take this week?</label>
                  <textarea
                    value={jPractice}
                    onChange={e => setJPractice(e.target.value)}
                    placeholder="A specific act of service, deflection, or hidden good..."
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
                {e.pride_pattern && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Pride Pattern</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.pride_pattern}</p></div>}
                {e.truth && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Truth</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.truth}</p></div>}
                {e.practice && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Practice</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.practice}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="YcPU5XhfLig" title="What Is Humility? The Christian Understanding" />
            <VideoEmbed videoId="lri7PgENzuo" title="Philippians 2 and the Kenosis of Christ" />
            <VideoEmbed videoId="Fp5d2C1L1YM" title="Andrew Murray on Humility &mdash; The Beauty of Holiness" />
            <VideoEmbed videoId="Uy1kJWMvVmQ" title="Servant Leadership: The Upside-Down Kingdom" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
