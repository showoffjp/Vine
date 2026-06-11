"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

type FREntry = { id: string; date: string; fear: string; truth: string; courage: string };

export default function ChristianFearPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<FREntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianfear_entries") ?? "[]"); } catch { return []; }
  });
  const [jFear, setJFear] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jCourage, setJCourage] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianfear_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jFear.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), fear: jFear, truth: jTruth, courage: jCourage }, ...prev]);
    setJFear(""); setJTruth(""); setJCourage("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Life</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Fear &amp; the Christian
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Scripture says &ldquo;do not be afraid&rdquo; 365 times &mdash; once for every day of the year. Yet it also commands the fear of the Lord as wisdom&rsquo;s beginning. Understanding the difference between holy reverence and anxious dread is one of the Christian life&rsquo;s most clarifying tasks. Perfect love casts out fear &mdash; but first we must know which fear we are talking about.
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
                title: "The Fear of the Lord: Wisdom&rsquo;s Beginning (Proverbs 9:10)",
                body: "The fear of the LORD is the beginning of wisdom. The Hebrew yirat YHWH is not terror but awe &mdash; a reverent, trembling recognition of who God is relative to who we are. It is the posture of standing before ultimate reality without pretense. This fear is not the anxious dread of punishment but the worshipping creature&rsquo;s appropriate response to holiness. Far from being something to overcome, the fear of the Lord is a gift &mdash; it orients the whole person rightly, producing humility, obedience, and the beginning of genuine understanding. The fear that Scripture commands is the opposite of the fear that enslaves.",
              },
              {
                title: "&ldquo;Do Not Be Afraid&rdquo; &mdash; 365 Times in Scripture",
                body: "The most repeated command in the Bible is some form of &ldquo;do not fear&rdquo; or &ldquo;do not be afraid.&rdquo; The angels who appear to the shepherds, to Mary, to the women at the tomb &mdash; they all begin with &ldquo;fear not.&rdquo; This is not a dismissal of fear but a reorientation: something more commanding than what you fear has arrived. The antidote to fear in Scripture is almost never a cognitive exercise but a presence &mdash; God himself showing up. &ldquo;Fear not, for I am with you&rdquo; (Isaiah 41:10) is the pattern: the command precedes the reason, and the reason is always divine accompaniment.",
              },
              {
                title: "Fear of Death &mdash; the Root Fear (Hebrews 2:14-15)",
                body: "Since therefore the children share in flesh and blood, he himself likewise partook of the same things, that through death he might destroy the one who has the power of death &mdash; that is, the devil &mdash; and deliver all those who through fear of death were subject to lifelong slavery. The author of Hebrews identifies fear of death as the root of a whole system of bondage. The incarnation is specifically addressed to this: Jesus enters death to defeat it from the inside, so that those who believe are freed from the slavery that fear of death produces. Many surface-level fears &mdash; fear of failure, of rejection, of loss &mdash; have fear of death or non-being at their root. The resurrection is the deepest address of the deepest fear.",
              },
              {
                title: "Fear of Man vs. Fear of God (Proverbs 29:25)",
                body: "The fear of man lays a snare, but whoever trusts in the LORD is safe. The fear of man &mdash; caring more about human approval, rejection, or threat than about God&rsquo;s opinion &mdash; is one of the most pervasive and spiritually distorting fears in human life. It produces compromised speech, compromised action, and a perpetual anxiety about social positioning. The cure, paradoxically, is the fear of God: when God&rsquo;s regard becomes more real and weighty than any human regard, the fear of man loses its grip. &ldquo;If God is for us, who can be against us?&rdquo; (Romans 8:31) is the theological logic that frees the Christian from the snare of human opinion.",
              },
              {
                title: "Perfect Love Casts Out Fear (1 John 4:18)",
                body: "There is no fear in love, but perfect love casts out fear. For fear has to do with punishment, and whoever fears has not been perfected in love. John makes a precise distinction: the fear that love casts out is the fear of punishment &mdash; the slavish, anxious, self-protective fear that sees God as threat rather than father. This is not the reverent fear of the Lord but its counterfeit. The logic: if I am fully persuaded that I am loved &mdash; that there is no condemnation for those in Christ Jesus (Romans 8:1) &mdash; then the fear of ultimate rejection dissolves. Growing in love &mdash; both receiving God&rsquo;s love and extending it &mdash; is the cure for anxious fear.",
              },
              {
                title: "Anxiety and Fear &mdash; the New Testament Distinction",
                body: "Be anxious for nothing, but in everything by prayer and supplication, with thanksgiving, let your requests be made known to God (Philippians 4:6). The New Testament distinguishes between momentary fear (a natural physiological response to danger) and anxious worry &mdash; the chronic, ruminating attention given to possible future harms. Jesus in Matthew 6 addresses the worry-habit: &ldquo;do not be anxious about tomorrow.&rdquo; The antidote is not positive thinking but reorientation of attention: seeking the kingdom first, bringing requests to God rather than carrying them alone, and receiving the peace that surpasses understanding. Fear is often instantaneous; anxiety is a habit that can be formed and reformed.",
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
              "When fear arises, name it specifically &mdash; fear of failure, of rejection, of death, of loss. Vague anxiety resists examination; named fear can be brought before God. Ask: what am I actually afraid of losing or becoming?",
              "Pray Psalm 23 slowly in moments of fear: &ldquo;Though I walk through the valley of the shadow of death, I will fear no evil, for you are with me.&rdquo; The logic of the psalm is the presence of the shepherd, not the absence of the valley. Do not skip the valley; let the presence of God in it be your comfort.",
              "Practice distinguishing the fear of the Lord (reverent awe, appropriate creature-response to holiness) from anxious fear (self-protective dread of punishment or loss). Cultivate the former as a daily posture of worship; bring the latter honestly to God in prayer.",
              "When you notice the fear of man operating &mdash; when you hold back what is true because of what people will think &mdash; pause and ask: whose approval am I ultimately seeking? Bring your desire for human approval before God and ask for the freedom that comes from his acceptance.",
              "Memorize and meditate on Isaiah 41:10: &ldquo;Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.&rdquo; Let this become the first response when fear surfaces.",
              "Study the biblical pattern: the antidote to fear is almost always presence, not argument. Do not try to reason yourself out of fear in isolation; bring yourself into God&rsquo;s presence through prayer, community, Scripture, and worship &mdash; and let the reality of his nearness reorient you.",
              "When anxiety is chronic, bring it to a counselor or pastor &mdash; anxiety disorders have both spiritual and physiological dimensions, and care for the whole person is not faithlessness but wisdom. Phil 4:6 and therapy are not competing strategies.",
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
                work: "The Problem of Pain",
                quote: "Perfect love, we know, casteth out fear. But so do several other things &mdash; ignorance, alcohol, passion, presumption, and stupidity. It is very desirable that we should distinguish the expulsion of fear that is really love from the expulsion of fear that is merely one of these.",
                bio: "C.S. Lewis was an Oxford and Cambridge professor and one of Christianity&rsquo;s most effective apologists in the twentieth century. His reflection on fear and love makes a crucial distinction: not all absence of fear is virtue. The goal is love-generated courage, not the bravado of numbness or self-deception. His clear-eyed analysis of human psychology in theological terms remains essential reading.",
              },
              {
                name: "Timothy Keller",
                work: "The Reason for God",
                quote: "The fear of the Lord is not a self-protective fear that turns you inward; it is an outward-turning awe that changes everything about how you see the world. It is freedom from every other fear, because you have encountered the only thing truly worth fearing &mdash; and found it to be love.",
                bio: "Timothy Keller (1950&ndash;2023) was the founding pastor of Redeemer Presbyterian Church in New York City and one of the most theologically careful popular preachers of his generation. His treatment of fear repeatedly distinguishes between the enslaving fear of man and the liberating fear of God, showing how encountering the greatness and love of God displaces every smaller fear.",
              },
              {
                name: "Henri Nouwen",
                work: "Life of the Beloved",
                quote: "Our first and most fundamental truth is not &lsquo;I am afraid&rsquo; but &lsquo;I am the beloved.&rsquo; Fear speaks loudly, but it does not speak first or last. Learning to hear the voice that names us beloved beneath the noise of our fears is the work of the spiritual life.",
                bio: "Henri Nouwen (1932&ndash;1996) was a Dutch Catholic priest and spiritual writer who taught at Harvard, Yale, and Notre Dame before spending the last decade of his life serving people with intellectual disabilities at L&rsquo;Arche Daybreak in Toronto. His writing on the spiritual life consistently returns to the theme of the beloved identity: being named and known by God as the foundation that fear cannot shake.",
              },
              {
                name: "Corrie ten Boom",
                work: "The Hiding Place",
                quote: "Never be afraid to trust an unknown future to a known God. Worry does not empty tomorrow of its sorrow; it empties today of its strength.",
                bio: "Corrie ten Boom (1892&ndash;1983) survived the Nazi concentration camps after hiding Jewish people in her family&rsquo;s home in Haarlem, Netherlands. Her testimony of experiencing God&rsquo;s faithfulness in conditions of extreme suffering gives her words on fear a weight that armchair theology cannot match. She wrote and spoke until she was 85, and her life embodied the claim that perfect love casts out fear even in the worst circumstances.",
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
              { ref: "Psalm 23:4", text: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
              { ref: "Isaiah 41:10", text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand." },
              { ref: "1 John 4:18", text: "There is no fear in love, but perfect love casts out fear. For fear has to do with punishment, and whoever fears has not been perfected in love." },
              { ref: "Proverbs 9:10", text: "The fear of the LORD is the beginning of wisdom, and knowledge of the Holy One is understanding." },
              { ref: "Proverbs 29:25", text: "The fear of man lays a snare, but whoever trusts in the LORD is safe." },
              { ref: "Philippians 4:6-7", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." },
              { ref: "Romans 8:15", text: "For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, &ldquo;Abba! Father!&rdquo;" },
              { ref: "2 Timothy 1:7", text: "For God gave us a spirit not of fear but of power and love and self-control." },
              { ref: "Hebrews 2:14-15", text: "Since therefore the children share in flesh and blood, he himself likewise partook of the same things, that through death he might destroy the one who has the power of death&hellip;and deliver all those who through fear of death were subject to lifelong slavery." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Fear &amp; Courage Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What specific fear are you carrying?</label>
                  <textarea
                    value={jFear}
                    onChange={e => setJFear(e.target.value)}
                    placeholder="Name it precisely &mdash; fear of failure, rejection, death, loss of control, the future..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What truth from Scripture speaks to this fear?</label>
                  <textarea
                    value={jTruth}
                    onChange={e => setJTruth(e.target.value)}
                    placeholder="A verse, a promise, a name of God that addresses what you fear..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What courageous step can you take despite this fear?</label>
                  <textarea
                    value={jCourage}
                    onChange={e => setJCourage(e.target.value)}
                    placeholder="Courage is not the absence of fear but acting in the face of it..."
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
                {e.fear && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Fear</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.fear}</p></div>}
                {e.truth && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Truth</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.truth}</p></div>}
                {e.courage && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Courage</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.courage}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="u4Ec5dAHnAE" title="The Fear of the Lord &mdash; What Does It Mean?" />
            <VideoEmbed videoId="MXBqaFITgZk" title="Do Not Be Afraid &mdash; What the Bible Says About Fear" />
            <VideoEmbed videoId="SFHsZnpndaY" title="Perfect Love Casts Out Fear &mdash; 1 John 4:18 Explained" />
            <VideoEmbed videoId="LmqiWJywjQA" title="Anxiety and the Christian &mdash; Philippians 4 and Mental Health" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
