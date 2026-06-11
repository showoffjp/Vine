"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";
const GREEN = "#3a7d56";

type ASEntry = { id: string; date: string; doubt: string; anchor: string; confidence: string };

export default function AssuranceOfSalvationPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ASEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_assurance_entries") ?? "[]"); } catch { return []; }
  });
  const [jDoubt, setJDoubt] = useState("");
  const [jAnchor, setJAnchor] = useState("");
  const [jConfidence, setJConfidence] = useState("");

  useEffect(() => { localStorage.setItem("vine_assurance_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jDoubt.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), doubt: jDoubt, anchor: jAnchor, confidence: jConfidence }, ...prev]);
    setJDoubt(""); setJAnchor(""); setJConfidence("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  const card = { background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "1.5rem" };

  const theologyItems = [
    {
      title: "Can I Know I Am Saved? (1 John 5:13)",
      body: "These things I have written to you who believe in the name of the Son of God, so that you may know that you have eternal life. John explicitly writes his epistle so that believers may know, not hope or guess, that they have eternal life. Assurance of salvation is not presumption but a gift God offers. The question of assurance has generated enormous controversy in Christian history — from the Council of Trent (which denied certain assurance as presumption) to the Puritans (who made assurance an obsessive concern) to contemporary charismatic streams. A balanced biblical answer: assurance is possible, grounded not in our faithfulness but in God’s, and comes through the testimony of Scripture, the inner witness of the Spirit, and the fruit of a changed life.",
    },
    {
      title: "The Foundation of Assurance — God’s Faithfulness (John 10:28-29)",
      body: "I give them eternal life, and they will never perish, and no one will snatch them out of my hand. My Father, who has given them to me, is greater than all, and no one is able to snatch them out of the Father’s hand. Assurance rests not on the strength of our grip on God but on the strength of God’s grip on us. The believer’s security is doubly guaranteed: held by the Son and held by the Father. This is not a ground for complacency but for confidence — the kind of confidence that enables risk-taking discipleship rather than anxious self-monitoring.",
    },
    {
      title: "The Three Witnesses of 1 John — Spirit, Water, Blood (1 John 5:6-8)",
      body: "John identifies three grounds of assurance: the Spirit who witnesses within, the water (baptism/new birth), and the blood (the atoning work of Christ). The inner witness of the Spirit — the Spirit testifying with our spirit that we are children of God (Rom 8:16) — is the most immediate but also the most variable. The objective grounds (Christ’s work, the promises of Scripture) are the bedrock; the subjective witness of the Spirit confirms and makes personal what is objectively true.",
    },
    {
      title: "Fruit as Evidence — Not Grounds (1 John 3:14)",
      body: "We know that we have passed from death to life, because we love each other. The fruit of the Spirit, practical love for God and neighbor, and perseverance in faith are evidence of genuine regeneration — not the ground of assurance (which is Christ’s work alone) but the evidence of it. The Puritan tradition developed detailed lists of signs of grace, which became spiritually oppressive when detached from the objective promise of the gospel. The proper use: fruit confirms what the promise declares; it does not replace the promise as the foundation of assurance.",
    },
    {
      title: "Dealing with Doubt — the Assurance of a Struggling Faith (Mark 9:24)",
      body: "I believe; help my unbelief! The man asking Jesus to heal his son is simultaneously confessing faith and confessing the inadequacy of his faith. Jesus heals the son anyway. Genuine faith is not the absence of doubt but trust in the object of faith despite doubt. The Reformers distinguished between the assurance of faith (trusting in Christ’s promises) and the assurance of feeling (the emotional certainty of being saved). Seasons of spiritual dryness and doubt are normal in the Christian life and do not indicate the absence of genuine faith.",
    },
  ];

  const practiceItems = [
    "When doubt strikes, return to the objective: read the promises of John 3:16, 10:28-29, Romans 8:38-39 aloud — anchor yourself in what God has declared, not how you feel",
    "Memorize 1 John 5:13 and Romans 8:1 as anchors for moments of assurance crisis",
    "Practice thanksgiving specifically for your salvation — naming in prayer the specific work of Christ that secures you, building the habit of gratitude that confirms faith",
    "If chronic doubt persists, bring it to a pastor or spiritual director — not all doubt is spiritual; some has roots in depression, trauma, or scrupulosity that needs pastoral or therapeutic attention",
    "Keep a record of God’s faithfulness — a running list of specific ways God has shown up, not as grounds for assurance but as reminders of the pattern of his character",
  ];

  const voiceItems = [
    {
      name: "J.I. Packer",
      work: "Knowing God",
      quote: "The question is not whether I feel saved but whether I am trusting Christ. The promises of God are not contingent on the quality of my faith but on the faithfulness of the One who made them. A trembling hand that holds the lifebuoy is as safe as a strong one.",
      bio: "J.I. Packer’s Knowing God remains one of the most influential works of popular Christian theology. His treatment of adoption — the believer’s status as a child of God — provides the theological foundation for genuine assurance: assurance is grounded in who God is and what he has done, not in the quality of our spiritual experience.",
    },
    {
      name: "John Wesley",
      work: "Journal",
      quote: "I felt my heart strangely warmed. I felt I did trust in Christ, Christ alone, for salvation; and an assurance was given me that He had taken away my sins, even mine.",
      bio: "John Wesley’s Aldersgate experience — the moment of assurance that transformed his ministry — illustrates the subjective dimension of assurance: the inner witness of the Spirit that makes the objective promise personally alive. Wesley’s subsequent theology distinguished between the assurance of pardon (that sins are forgiven) and the assurance of sonship (that one is a child of God), both grounded ultimately in the promises of Scripture.",
    },
    {
      name: "Martin Luther",
      work: "Preface to Romans",
      quote: "Faith is a living, daring confidence in God’s grace, so sure and certain that a man could stake his life on it a thousand times. This knowledge of and confidence in God’s grace makes men glad and bold and happy in dealing with God and with all creatures.",
      bio: "Luther’s recovery of assurance was central to the Reformation. Against the medieval teaching that assurance was presumptuous, Luther insisted that the gospel creates bold confidence before God — not because of anything in us but because of everything in Christ. His preface to Romans remains one of the clearest accounts of how faith and assurance work together.",
    },
  ];

  const scriptureItems = [
    { ref: "John 10:28-29", text: "I give them eternal life, and they will never perish, and no one will snatch them out of my hand. My Father, who has given them to me, is greater than all, and no one is able to snatch them out of the Father’s hand." },
    { ref: "1 John 5:13", text: "I write these things to you who believe in the name of the Son of God, so that you may know that you have eternal life." },
    { ref: "Rom 8:16", text: "The Spirit himself bears witness with our spirit that we are children of God." },
    { ref: "Rom 8:38-39", text: "For I am sure that neither death nor life, nor angels nor rulers, nor things present nor things to come, nor powers, nor height nor depth, nor anything else in all creation, will be able to separate us from the love of God in Christ Jesus our Lord." },
    { ref: "1 John 3:14", text: "We know that we have passed out of death into life, because we love the brothers. Whoever does not love abides in death." },
    { ref: "Mark 9:24", text: "Immediately the father of the child cried out and said, ‘I believe; help my unbelief!’" },
  ];

  const videoItems = [
    { videoId: "BwsaZHcN5qA", title: "Can You Know You Are Saved? Assurance of Salvation Explained" },
    { videoId: "V1SiUUhvgEM", title: "The Grounds of Assurance — Why Your Salvation Is Secure" },
    { videoId: "RM9cAFE6KAo", title: "Dealing with Doubt: Faith, Feelings, and the Promises of God" },
    { videoId: "K9Df1nKt0mg", title: "J.I. Packer: Knowing God and the Security of the Believer" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: 2, color: ACCENT, textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Faith &amp; Doctrine
          </div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 900, lineHeight: 1.15, marginBottom: "1rem" }}>
            Assurance of Salvation
          </h1>
          <p style={{ color: MUTED, fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 680 }}>
            Can I know I am saved? Scripture says yes. Assurance is not presumption but a gift God offers to those who believe — grounded not in the quality of our faith but in the faithfulness of the God who saves.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map((t) => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              style={{
                padding: "0.5rem 1.1rem", borderRadius: 999, fontWeight: 700, fontSize: "0.82rem",
                background: tab === t.id ? ACCENT : "transparent",
                color: tab === t.id ? "#fff" : MUTED,
                border: `1px solid ${tab === t.id ? ACCENT : BORDER}`,
                cursor: "pointer", transition: "all .18s",
              }}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theologyItems.map((item) => (
              <div key={item.title} style={{ ...card }}>
                <h3 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.05rem", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>{item.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1.25rem", color: ACCENT }}>Practices for Cultivating Assurance</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {practiceItems.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: `${ACCENT}0A`, border: `1px solid ${ACCENT}25`, borderRadius: 12, padding: "1rem 1.25rem" }}>
                  <span style={{ color: ACCENT, fontWeight: 900, fontSize: "1rem", flexShrink: 0, minWidth: 24 }}>{i + 1}.</span>
                  <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.97rem" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voiceItems.map((v) => (
              <div key={v.name} style={{ ...card }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 800, color: TEXT, fontSize: "1.05rem" }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: 2 }}>{v.work}</div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: "1rem", margin: "0 0 0.75rem", color: TEXT, fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;{v.quote}&rdquo;
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptureItems.map((s) => (
              <div key={s.ref} style={{ background: `${ACCENT}0A`, border: `1px solid ${ACCENT}25`, borderRadius: 12, padding: "1rem 1.25rem", borderLeft: `3px solid ${ACCENT}` }}>
                <div style={{ fontWeight: 800, color: ACCENT, fontSize: "0.9rem", marginBottom: "0.4rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ ...card }}>
              <h2 style={{ fontWeight: 900, fontSize: "1.2rem", color: ACCENT, marginBottom: "0.5rem" }}>Assurance Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                Stored only on this device. Reflect on your doubt, your anchor in God&rsquo;s promises, and your current confidence.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1, textTransform: "uppercase" }}>What doubt are you facing?</label>
                  <textarea
                    value={jDoubt}
                    onChange={(e) => setJDoubt(e.target.value)}
                    placeholder="Describe the doubt or question about your salvation..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1, textTransform: "uppercase" }}>What Scripture or promise anchors you?</label>
                  <textarea
                    value={jAnchor}
                    onChange={(e) => setJAnchor(e.target.value)}
                    placeholder="Which verse, promise, or truth holds you steady..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, resize: "vertical", outline: "none", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", fontWeight: 700, marginBottom: "0.4rem", letterSpacing: 1, textTransform: "uppercase" }}>Your current confidence (0&ndash;10)</label>
                  <input
                    type="text"
                    value={jConfidence}
                    onChange={(e) => setJConfidence(e.target.value)}
                    placeholder="e.g. 6 — or describe in words..."
                    style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "0.75rem 1rem", color: TEXT, fontSize: "0.95rem", outline: "none", boxSizing: "border-box" }}
                  />
                </div>
                <button
                  type="button"
                  onClick={saveEntry}
                  style={{ alignSelf: "flex-start", padding: "0.6rem 1.5rem", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer" }}>
                  Save Entry
                </button>
              </div>
            </div>
            {entries.map((e) => (
              <div key={e.id} style={{ ...card }}>
                <div style={{ color: MUTED, fontSize: "0.82rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.doubt && (
                  <div style={{ marginBottom: "0.6rem" }}>
                    <span style={{ color: ACCENT, fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: 1 }}>Doubt: </span>
                    <span style={{ color: TEXT, lineHeight: 1.7 }}>{e.doubt}</span>
                  </div>
                )}
                {e.anchor && (
                  <div style={{ marginBottom: "0.6rem" }}>
                    <span style={{ color: ACCENT, fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: 1 }}>Anchor: </span>
                    <span style={{ color: TEXT, lineHeight: 1.7 }}>{e.anchor}</span>
                  </div>
                )}
                {e.confidence && (
                  <div>
                    <span style={{ color: ACCENT, fontWeight: 700, fontSize: "0.82rem", textTransform: "uppercase", letterSpacing: 1 }}>Confidence: </span>
                    <span style={{ color: TEXT, lineHeight: 1.7 }}>{e.confidence}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ ...card }}>
            <h2 style={{ fontWeight: 900, fontSize: "1.3rem", marginBottom: "1.25rem", color: ACCENT }}>Video Teaching on Assurance</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {videoItems.map((v) => (
                <VideoEmbed key={v.videoId} videoId={v.videoId} title={v.title} />
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
