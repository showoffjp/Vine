"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#F59E0B", TEXT = "#F2F2F8", MUTED = "#9898B3";

type JYEntry = { id: string; date: string; circumstance: string; truth: string; practice: string };

export default function ChristianJoyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<JYEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianjoy_entries") ?? "[]"); } catch { return []; }
  });
  const [jCircumstance, setJCircumstance] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jPractice, setJPractice] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianjoy_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jCircumstance.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), circumstance: jCircumstance, truth: jTruth, practice: jPractice }, ...prev]);
    setJCircumstance(""); setJTruth(""); setJPractice("");
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
          The Joy of the Lord
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          The joy of the LORD is your strength &mdash; not a reward for easy circumstances but a power for hard ones. Joy is deeper than happiness, sturdier than mood, and possible in prison cells and trials. This guide walks through the theology and cultivation of durable Christian joy.
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
                title: "The Joy of the LORD Is Your Strength (Nehemiah 8:10)",
                body: "Do not grieve, for the joy of the LORD is your strength. The setting matters: the returned exiles, hearing the Law read aloud, are weeping under conviction &mdash; and Nehemiah and Ezra tell them to stop mourning and start feasting. Joy here is not a feeling that arrives when life is finally fixed; it is commanded to a battered people standing in the rubble of their city. And it is called strength: joy is what enables endurance, generosity (send portions to anyone who has nothing ready), and rebuilding. The phrase can be read both ways &mdash; the joy God gives, and the joy God himself has &mdash; and both hold: God&rsquo;s own delight in his people becomes their power to keep going.",
              },
              {
                title: "Joy vs. Happiness",
                body: "Happiness, in common usage, is tied to happenings &mdash; it rises and falls with circumstances. Joy in the biblical sense is anchored to something deeper: the unchanging character and presence of God. This is why Scripture can command joy (Rejoice in the Lord always, Phil 4:4) in a way it could never sensibly command happiness; you cannot order someone to feel cheerful, but you can call them to fix their attention on realities that do not change. Joy can therefore coexist with sorrow &mdash; sorrowful, yet always rejoicing (2 Cor 6:10) &mdash; the way an underground river runs beneath a landscape regardless of the weather above it. Happiness is weather; joy is climate.",
              },
              {
                title: "Philippians — the Epistle of Joy, Written from Prison",
                body: "The New Testament&rsquo;s most joy-saturated letter was written from a Roman imprisonment. Paul uses the words joy and rejoice some sixteen times in four short chapters &mdash; while chained to a guard, facing possible execution, and dealing with rival preachers trying to afflict him. Yes, and I will rejoice (Phil 1:18). Rejoice in the Lord always; again I will say, rejoice (Phil 4:4). The location of the command is its credential: this is not greeting-card cheerfulness but joy that has been tested against the worst circumstances and found to hold. Paul&rsquo;s secret, he says, is learned contentment (Phil 4:11-13) &mdash; joy decoupled from circumstance and recoupled to Christ.",
              },
              {
                title: "Joy as Fruit of the Spirit (Galatians 5:22)",
                body: "The fruit of the Spirit is love, joy, peace... Joy comes second in Paul&rsquo;s list, right after love &mdash; and the agricultural metaphor is instructive. Fruit is not manufactured by effort but grown by abiding; you cannot bolt apples onto a dead tree. Jesus makes the same connection in John 15: abide in me... that my joy may be in you, and that your joy may be full (John 15:4, 11). Christian joy is therefore not primarily a discipline of positive thinking but a byproduct of connection &mdash; the natural produce of a life rooted in the vine. The practical question for the joyless season is less &ldquo;how do I feel better?&rdquo; than &ldquo;where has my abiding thinned out?&rdquo;",
              },
              {
                title: "Counting Trials as Joy (James 1:2; Romans 5:3)",
                body: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. James does not say trials feel joyful; he says count it &mdash; a deliberate act of accounting, a chosen interpretation of suffering in light of what God produces through it. This is not denial (the trial is real) nor masochism (the trial is not good in itself), but confidence in the divine economy: nothing endured in faith is wasted. Like Romans 5:3-5, the logic runs through what suffering produces &mdash; steadfastness, character, completeness. Joy in trials is the fruit of trusting the Gardener while being pruned.",
              },
              {
                title: "The Joy Set Before Jesus (Hebrews 12:2)",
                body: "Looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God. Joy was the engine of the atonement: Jesus endured the cross not by gritted-teeth stoicism but for joy &mdash; the joy of accomplished redemption, of the Father&rsquo;s pleasure, of bringing many sons and daughters to glory. This text dignifies anticipated joy as a legitimate motive for present endurance. The Christian running the race with endurance is not asked to pretend the race is painless, but to run it the way Jesus did: with eyes fixed on a joy that outweighs the cost (2 Cor 4:17).",
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
              "Practice rejoicing always (1 Thess 5:16) as a discipline, not a mood: set two or three fixed moments in the day to deliberately recall one unchanging reason for joy &mdash; your name written in heaven (Luke 10:20) &mdash; regardless of how the day is going.",
              "Keep a daily gratitude record: write three specific gifts from the day each evening. Joy is fed by attention, and gratitude is attention trained on grace (1 Thess 5:18 pairs rejoicing with giving thanks).",
              "When a trial hits, do the James 1:2 accounting on paper: name the trial honestly, then write what steadfastness, character, or dependence God may be producing through it &mdash; counting is an act, not a feeling.",
              "Audit your abiding (John 15:4-11): if joy has gone dry, check the connection before checking the circumstances &mdash; Scripture, prayer, sabbath, and fellowship are the root system that fruit grows from.",
              "Read Philippians in one sitting and circle every occurrence of joy or rejoice, noting Paul&rsquo;s circumstances in each chapter &mdash; let the prison setting recalibrate what you believe joy requires.",
              "Celebrate deliberately: practice Nehemiah 8:10 by marking God&rsquo;s goodness with actual feasting &mdash; a shared meal, a sabbath delight, a celebration of an answered prayer &mdash; and include someone who has nothing ready.",
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
                work: "Surprised by Joy",
                quote: "Joy is distinct not only from pleasure in general but even from aesthetic pleasure. It must have the stab, the pang, the inconsolable longing... I doubt whether anyone who has tasted it would ever, if both were in his power, exchange it for all the pleasures in the world.",
                bio: "C.S. Lewis titled his spiritual autobiography Surprised by Joy because it was joy &mdash; the recurring stab of longing he called Sehnsucht &mdash; that ultimately led him from atheism to Christ. For Lewis, joy was a signpost: a desire no earthly thing could satisfy, pointing to the fact that we were made for another world. Once he found the One the longing pointed to, the signpost mattered less than the destination.",
              },
              {
                name: "John Piper",
                work: "Desiring God",
                quote: "God is most glorified in us when we are most satisfied in him. The pursuit of joy in God is not optional. It is not an &ldquo;extra&rdquo; that a person might grow into after he comes to faith. It is our duty and our delight.",
                bio: "John Piper is a pastor and author whose Christian Hedonism &mdash; the conviction that pursuing maximum joy in God is the heart of the Christian life &mdash; reframed joy from a pleasant byproduct into a sacred obligation. Drawing on Jonathan Edwards and the Psalms&rsquo; repeated commands to delight in the LORD, Piper argues that worship and joy are inseparable: half-hearted joy in God is not humility but a failure of worship.",
              },
              {
                name: "G.K. Chesterton",
                work: "Orthodoxy",
                quote: "Joy, which was the small publicity of the pagan, is the gigantic secret of the Christian... There was some one thing that was too great for God to show us when He walked upon our earth; and I have sometimes fancied that it was His mirth.",
                bio: "G.K. Chesterton was an English journalist and apologist whose Orthodoxy closes with one of the most famous passages on joy in Christian literature. For Chesterton, joy is not peripheral to the faith but its deepest structure: melancholy should be an innocent interlude, joy the permanent pulsation of the soul. His own life of overflowing wit and wonder was an argument that orthodoxy and gladness belong together.",
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
              { ref: "Nehemiah 8:10", text: "Then he said to them, &ldquo;Go your way. Eat the fat and drink sweet wine and send portions to anyone who has nothing ready, for this day is holy to our Lord. And do not be grieved, for the joy of the LORD is your strength.&rdquo;" },
              { ref: "Philippians 4:4", text: "Rejoice in the Lord always; again I will say, rejoice." },
              { ref: "1 Thessalonians 5:16-18", text: "Rejoice always, pray without ceasing, give thanks in all circumstances; for this is the will of God in Christ Jesus for you." },
              { ref: "James 1:2-4", text: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing." },
              { ref: "Hebrews 12:2", text: "Looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God." },
              { ref: "Galatians 5:22-23", text: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law." },
              { ref: "John 15:11", text: "These things I have spoken to you, that my joy may be in you, and that your joy may be full." },
              { ref: "Psalm 16:11", text: "You make known to me the path of life; in your presence there is fullness of joy; at your right hand are pleasures forevermore." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Joy Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What circumstance is pressing on your joy right now?</label>
                  <textarea
                    value={jCircumstance}
                    onChange={e => setJCircumstance(e.target.value)}
                    placeholder="Name the trial, the dryness, or the grief honestly &mdash; joy does not require denial..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What unchanging truth can you rejoice in anyway?</label>
                  <textarea
                    value={jTruth}
                    onChange={e => setJTruth(e.target.value)}
                    placeholder="Something circumstance cannot touch &mdash; Nehemiah 8:10, Philippians 4:4, Luke 10:20..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What one practice will you use to cultivate joy this week?</label>
                  <textarea
                    value={jPractice}
                    onChange={e => setJPractice(e.target.value)}
                    placeholder="Gratitude record, deliberate celebration, abiding in the vine (John 15)..."
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
                {e.circumstance && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Circumstance</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.circumstance}</p></div>}
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
            <VideoEmbed videoId="oE9qqW1-BkU" title="Philippians: The Epistle of Joy &mdash; Overview" />
            <VideoEmbed videoId="qn-hLHWwRYY" title="James: Counting Trials as Joy &mdash; Overview" />
            <VideoEmbed videoId="3dEh25pduQ8" title="The Holy Spirit and the Fruit of Joy" />
            <VideoEmbed videoId="MkETkRv9tG8" title="Ezra-Nehemiah: The Joy of the LORD Is Your Strength" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
