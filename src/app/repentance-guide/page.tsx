"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

type RPEntry = { id: string; date: string; sin: string; turn: string; renewal: string };

export default function RepentanceGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_repentance_entries") ?? "[]"); } catch { return []; }
  });
  const [jSin, setJSin] = useState("");
  const [jTurn, setJTurn] = useState("");
  const [jRenewal, setJRenewal] = useState("");

  useEffect(() => { localStorage.setItem("vine_repentance_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jSin.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), sin: jSin, turn: jTurn, renewal: jRenewal }, ...prev]);
    setJSin(""); setJTurn(""); setJRenewal("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Spiritual Formation</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          A Guide to Repentance
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Repentance is not self-flagellation but a direction change &mdash; a turning of the whole person toward God. Metanoia is not remorse; it is return. This guide walks through the theology, pattern, and practice of genuine turning.
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
                title: "Repentance Is More Than Regret — Metanoia (Mark 1:15)",
                body: "The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel. The Greek metanoia means a change of mind, a turning &mdash; not merely regret or remorse but a reorientation of the whole person toward God. Judas had remorse (metameleia &mdash; sorrow) but not repentance (Matt 27:3-5). Godly sorrow produces repentance that leads to salvation, while worldly sorrow produces death (2 Cor 7:10). The distinction is important: remorse looks inward at how bad I feel; repentance looks outward at what is good, true, and real &mdash; and turns toward it. Repentance is not self-flagellation but a direction change.",
              },
              {
                title: "Repentance as Return — the Prodigal&rsquo;s Pattern (Luke 15:17-20)",
                body: "When he came to himself, he said... I will arise and go to my father. The prodigal&rsquo;s repentance has several movements: coming to himself (self-awareness), facing the truth of his situation, forming a resolution, and acting on it. He does not wait until he feels fully repentant; he arises and goes. The father sees him while he is still far off and runs to meet him &mdash; the welcome is not conditional on the quality of the son&rsquo;s repentance speech but precedes it. This is the gospel architecture: God&rsquo;s welcome creates the conditions for genuine repentance rather than the other way around.",
              },
              {
                title: "Corporate and Individual Repentance — the Nehemiah Model (Neh 9:1-3)",
                body: "On the twenty-fourth day of the same month, the Israelites gathered together, fasting and wearing sackcloth and putting dust on their heads... They stood in their places and confessed their sins and the sins of their ancestors. Repentance in Scripture is often corporate &mdash; not only individual sin but structural, generational, and communal patterns of unfaithfulness. Nehemiah&rsquo;s great prayer of repentance includes confession of the specific sins of specific generations. The church in America, for example, has particular structural sins &mdash; the participation in slavery, the treatment of indigenous peoples, the normalization of racial injustice &mdash; that require not just individual but corporate acknowledgment and turning.",
              },
              {
                title: "Repentance as Ongoing Practice — Not Just Conversion (Acts 2:38)",
                body: "Repent and be baptized every one of you... Luther&rsquo;s first thesis: When our Lord and Master Jesus Christ said repent, he willed the entire life of believers to be one of repentance. Repentance is not a one-time event at conversion but the ongoing posture of the Christian life &mdash; what the daily examination of conscience, the weekly confession of sin in liturgy, and the regular practice of reconciliation are designed to sustain. The Christian who has ceased to repent has not arrived at maturity but at complacency. The deepest saints in the tradition are typically those most aware of their continuing need for repentance.",
              },
              {
                title: "Repentance and Forgiveness — the Relational Dimension (Matt 18:15-17)",
                body: "If your brother or sister sins against you, go and show them their fault. Repentance has a relational dimension: the confession of wrong done to another person, the request for forgiveness, and the work of reconciliation. James 5:16 commands mutual confession: confess your sins to each other. Vertical repentance (toward God) and horizontal repentance (toward those wronged) are inseparable. The person who confesses sin to God but refuses to acknowledge or make right the wrong done to another person has not fully repented. The restoration of a relationship requires both parties&rsquo; participation, but repentance can be offered even when the other party is unwilling to reconcile.",
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
              "Practice a daily examen (the Ignatian examination of conscience): at day&rsquo;s end, review the day before God &mdash; noticing moments of faithfulness and unfaithfulness, consolation and desolation &mdash; and bring any specific sins to brief, honest confession.",
              "When you confess a sin, do the full movement: name it specifically (not just a vague sense of falling short), express genuine sorrow, renounce it with intention, and receive the declaration of forgiveness &mdash; do not stop at the naming.",
              "If you have wronged a specific person, practice horizontal repentance: go to them, name what you did, and ask for forgiveness without qualification or self-justification (no <em>but&hellip;</em>).",
              "Examine whether you have areas of habitual sin where you have settled into a cycle of sin-regret-sin without genuine turning; bring those patterns to a confessor, counselor, or trusted friend.",
              "Read the parable of the prodigal son (Luke 15:11-32) slowly, noting every movement &mdash; and identify where you currently are in that story.",
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
                name: "Thomas Watson",
                work: "The Doctrine of Repentance",
                quote: "Repentance is a grace of God&rsquo;s Spirit whereby a sinner is inwardly humbled and visibly reformed... There is a hatred of sin, and a turning from it. The two legs of repentance are humiliation and reformation.",
                bio: "Thomas Watson was a 17th-century Puritan pastor whose The Doctrine of Repentance remains one of the most thorough and pastoral treatments of the subject in Christian literature. Watson identifies the components of genuine repentance (sight of sin, sorrow for sin, confession, shame, hatred of sin, turning from sin) with characteristic Puritan precision and pastoral warmth.",
              },
              {
                name: "C.S. Lewis",
                work: "Mere Christianity",
                quote: "Fallen man is not simply an imperfect creature who needs improvement: he is a rebel who must lay down his arms. Laying down your arms, surrendering, saying you are sorry, realizing that you have been on the wrong track and getting ready to start life over again from the ground floor &mdash; that is the only way out of our hole.",
                bio: "C.S. Lewis was an Oxford and Cambridge professor and one of the most widely-read Christian apologists. His treatment of repentance in Mere Christianity strips away religiosity and presents it in stark, clear terms: surrender. His framing of repentance not as moral self-improvement but as laying down arms against God is one of the most clarifying formulations available.",
              },
              {
                name: "Frederick Buechner",
                work: "Wishful Thinking",
                quote: "To repent is to come to your senses. It is not so much something you do as something that happens to you. Grace strikes us, and we are, for a moment, freed from the illusion that we are what we have done and what has been done to us. We turn. We are turned. In turning, we are turned toward home.",
                bio: "Frederick Buechner was a novelist and Presbyterian minister whose writings on the interior life of faith have nourished both the churched and unchurched. His brief meditations in Wishful Thinking on biblical terms give familiar concepts fresh precision. His rendering of repentance as coming to one&rsquo;s senses &mdash; more passive gift than willful act &mdash; captures the grace that underlies genuine turning.",
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
              { ref: "Mark 1:15", text: "The time is fulfilled, and the kingdom of God is at hand; repent and believe in the gospel." },
              { ref: "Luke 15:17-20", text: "But when he came to himself, he said, &ldquo;How many of my father&rsquo;s hired servants have more than enough bread, but I perish here with hunger! I will arise and go to my father, and I will say to him, Father, I have sinned against heaven and before you.&rdquo; And he arose and came to his father." },
              { ref: "2 Cor 7:10", text: "For godly grief produces a repentance that leads to salvation without regret, whereas worldly grief produces death." },
              { ref: "Acts 2:38", text: "And Peter said to them, &ldquo;Repent and be baptized every one of you in the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit.&rdquo;" },
              { ref: "1 John 1:9", text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness." },
              { ref: "Ps 51:1-4", text: "Have mercy on me, O God, according to your steadfast love; according to your abundant mercy blot out my transgressions. Wash me thoroughly from my iniquity, and cleanse me from my sin! For I know my transgressions, and my sin is ever before me. Against you, you only, have I sinned and done what is evil in your sight." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What sin or pattern are you bringing before God?</label>
                  <textarea
                    value={jSin}
                    onChange={e => setJSin(e.target.value)}
                    placeholder="Name it specifically rather than in vague generalities..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What does turning away from it look like concretely?</label>
                  <textarea
                    value={jTurn}
                    onChange={e => setJTurn(e.target.value)}
                    placeholder="What direction change, action, or relationship does this require?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What renewal or restoration are you trusting God for?</label>
                  <textarea
                    value={jRenewal}
                    onChange={e => setJRenewal(e.target.value)}
                    placeholder="Receive the promise of 1 John 1:9, Ps 51, the father running toward the prodigal..."
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
                {e.sin && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Sin / Pattern</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.sin}</p></div>}
                {e.turn && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Turn</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.turn}</p></div>}
                {e.renewal && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Renewal</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.renewal}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="kpNeKSC8mH4" title="What Is Repentance? The Biblical Meaning of Metanoia" />
            <VideoEmbed videoId="qsYmYCW4b5c" title="The Prodigal Son and the Pattern of Repentance" />
            <VideoEmbed videoId="VKII1x3rGDc" title="Daily Repentance: The Ongoing Practice of Turning to God" />
            <VideoEmbed videoId="9ib7RFlDKaw" title="True Repentance vs. Worldly Sorrow &mdash; What Is the Difference?" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
