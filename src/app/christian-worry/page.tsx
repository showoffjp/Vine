"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

type WRYEntry = { id: string; date: string; worry: string; truth: string; prayer: string };

export default function ChristianWorryPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<WRYEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianworry_entries") ?? "[]"); } catch { return []; }
  });
  const [jWorry, setJWorry] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jPrayer, setJPrayer] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianworry_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jWorry.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), worry: jWorry, truth: jTruth, prayer: jPrayer }, ...prev]);
    setJWorry(""); setJTruth(""); setJPrayer("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Mental Health</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Worry &amp; the Christian
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Jesus devoted more teaching to worry than to almost any other interior condition. Worry is not merely a mental health problem but a theological one &mdash; a statement about God&rsquo;s reliability and our own sufficiency. The remedy is not willpower but prayer, trust, and the present-tense awareness of God&rsquo;s sovereign care.
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
                title: "Do Not Be Anxious &mdash; The Sermon on the Mount (Matthew 6:25-34)",
                body: "Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on... But seek first the kingdom of God and his righteousness, and all these things will be added to you. Jesus&rsquo; extended teaching on worry in Matthew 6 is his longest sustained treatment of any single interior condition. Three times he says do not be anxious (merimna&ocirc;) &mdash; about food, clothing, and tomorrow. His argument is not psychological but theological: your heavenly Father knows what you need (v.32). Worry is implicitly a statement that God either does not know, does not care, or cannot provide &mdash; and the birds of the air and the lilies of the field are offered as evidence against all three. The command to seek first the kingdom is the positive alternative: reorder your priorities and watch your anxiety reorganize accordingly.",
              },
              {
                title: "Prayer as the Structural Antidote to Worry (Philippians 4:6-7)",
                body: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. Paul&rsquo;s instruction in Philippians 4 is precisely structured: the negative command (do not be anxious about anything) is immediately paired with a positive alternative (prayer and supplication with thanksgiving). The mechanism is not suppression of anxiety but its displacement by prayer. The result &mdash; the peace that surpasses understanding &mdash; is described as a garrison (phroure&ocirc;, a military term) that guards the heart and mind. The peace is not merely a feeling but a protective reality. Notice the element of thanksgiving: gratitude for what God has already done is the soil in which trust for what he has not yet done takes root.",
              },
              {
                title: "Worry vs. Legitimate Concern &mdash; An Important Distinction",
                body: "Jesus did not command emotional anesthesia or irresponsible indifference to real problems. The word merimna&ocirc; in Matthew 6 does not prohibit prudent planning or attentive care for those we love &mdash; Paul uses the same word positively in 1 Corinthians 12:25 for the mutual concern members of the body have for one another. The distinction lies in what worry does: it loops anxiously on a problem without moving toward action or trust, treating the future as if it were already determined and determined badly. Legitimate concern mobilizes for action; worry paralyzes or spirals. Thomas &Agrave; Kempis was direct: what doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility? Worrying about tomorrow achieves nothing (Matt 6:27 &mdash; which of you by being anxious can add a single hour to his span of life?)",
              },
              {
                title: "God&rsquo;s Sovereignty as the Foundation of Peace (Isaiah 26:3)",
                body: "You keep him in perfect peace whose mind is stayed on you, because he trusts in you. The Hebrew shalom shalom (perfect peace &mdash; doubled for emphasis) is promised not to the person who has resolved all uncertainties but to the person whose mind is stayed (samak &mdash; leaned, rested) on God. The architecture of peace is not circumstantial but relational &mdash; it is produced not by the removal of threats but by the orientation of the mind toward the One who holds all threats in his hand. God&rsquo;s sovereignty does not mean nothing bad will happen; it means that nothing that happens is outside his knowledge, permission, or capacity to redeem. This is the theological root of Christian peace: not optimism about circumstances but trust in a person.",
              },
              {
                title: "Living in the Present &mdash; The Day at a Time (Matthew 6:34)",
                body: "Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble. Most worry is future-directed &mdash; it rehearses possible catastrophes that have not yet occurred and may never occur. Jesus&rsquo; instruction is radically present-tense: sufficient for the day. The daily bread of the Lord&rsquo;s Prayer (ton arton h&emacr;m&omacr;n ton epiousion &mdash; our bread for today) similarly calibrates prayer to the present. This is not naivety about the future but a discipline of attention: what is required of me today? What grace is available to me now? The manna in the wilderness (Exodus 16) could not be hoarded &mdash; it was given daily, teaching Israel that dependence on God is a daily practice, not a one-time settlement.",
              },
              {
                title: "Casting Anxiety on God (1 Peter 5:7)",
                body: "Cast all your anxieties on him, because he cares for you. Peter&rsquo;s word for cast (epiript&omacr;) is the same used of throwing cloaks on a colt (Luke 19:35) &mdash; it is an active, decisive act, not a gradual releasing. The theological foundation is specific: because he cares for you. The Greek melet&omacr; means not abstract concern but active, attentive care &mdash; the shepherd&rsquo;s care for the sheep. Peter writes in a context of persecution and real suffering: this is not a prosperity gospel assurance that nothing bad will happen but a counter-intuitive invitation to lay even legitimate suffering and fear at the feet of a God who is personally invested in our welfare.",
              },
              {
                title: "Charles Spurgeon on Worry &mdash; A Victorian Diagnosis",
                body: "Spurgeon, who himself suffered from severe depression and anxiety, was characteristically direct: Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength. His pastoral ministry was formed by his own interior struggle, giving his treatment of anxiety both theological precision and pastoral credibility. He observed that worry is a form of practical atheism &mdash; not doctrinal denial of God but functional living as if God were absent or unreliable. His sermons on Matthew 6 and Philippians 4 remain among the most pastorally useful in the tradition for those who struggle with anxiety.",
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
              "When a worry thought arises, apply Philippians 4:6-7 structurally: pause and turn the specific worry into a specific prayer, naming what you are asking God for, then add a specific thanksgiving for something he has already done. Do this in the moment, not later.",
              "Practice the daily examen with a worry-specific lens: at day&rsquo;s end, note which worries actually materialized, which did not, and where you experienced God&rsquo;s provision. Keep a short &ldquo;evidence log&rdquo; of faithfulness over time.",
              "Identify whether your worry is actionable (something you can actually do something about today) or non-actionable (a hypothetical future threat). For actionable worry, make a plan and stop looping. For non-actionable worry, pray, release, and return to the present.",
              "Memorize Matthew 6:25-34 as a long-term resource: when worry surges, the passage recited slowly functions as both a theological reorientation and a meditative practice that brings the mind back to the present and to God.",
              "Practice breath prayer when anxiety rises: inhale slowly while silently praying a name or attribute of God (Father / Lord / Shepherd), and exhale while releasing the specific anxiety to him. Repeat until the grip loosens.",
              "Examine whether your worry has an idol underneath it: financial worry often protects a security idol; relational worry often protects a control idol; health worry often protects a comfort idol. Naming the idol helps locate the deeper work prayer must do.",
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
                name: "Charles Spurgeon",
                work: "Sermons on Matthew 6",
                quote: "Anxiety does not empty tomorrow of its sorrows, but only empties today of its strength. Cast your burden upon the Lord: he will sustain you, but he will not sustain your anxiety. Anxiety is atheism in practice.",
                bio: "Charles Spurgeon was the 19th century&rsquo;s most widely attended preacher, delivering sermons to thousands weekly at London&rsquo;s Metropolitan Tabernacle. He suffered personally from debilitating depression and anxiety throughout his ministry, giving his treatment of worry both intellectual precision and pastoral weight. His description of anxiety as practical atheism &mdash; not denial of God in doctrine but in daily function &mdash; remains one of the most penetrating diagnoses available.",
              },
              {
                name: "Corrie ten Boom",
                work: "The Hiding Place",
                quote: "Worry does not empty tomorrow of its sorrow &mdash; it empties today of its strength. I have held many things in my hands, and I have lost them all; but whatever I have placed in God&rsquo;s hands, that I still possess.",
                bio: "Corrie ten Boom was a Dutch watchmaker who survived the Nazi concentration camps after hiding Jewish families during World War II. Her memoir The Hiding Place is one of the most widely read Christian accounts of suffering and trust in the 20th century. Her testimony about worry carries the weight of someone who faced genuinely catastrophic circumstances and found God&rsquo;s faithfulness sufficient &mdash; not in the absence of suffering but through it.",
              },
              {
                name: "Dallas Willard",
                work: "The Divine Conspiracy",
                quote: "Jesus is not telling us not to think about the future, or to make no plans. He is telling us that we are not to be anxious &mdash; in a constant state of apprehensive unease... The one who trusts Jesus and puts his kingdom first will find that God himself, who rules the heavens and the earth, will personally take care of providing what is needed.",
                bio: "Dallas Willard was a philosopher and professor at the University of Southern California whose The Divine Conspiracy is one of the most ambitious engagements with the Sermon on the Mount in recent decades. His reading of Matthew 6 places the teaching against worry within Jesus&rsquo; broader kingdom proclamation: worry is a symptom of misplaced ultimate allegiance, and its remedy is not positive thinking but genuine reorientation around the kingdom of God.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em dangerouslySetInnerHTML={{ __html: v.work }} /></div>
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
              { ref: "Matthew 6:25-27", text: "Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on. Is not life more than food, and the body more than clothing? Look at the birds of the air: they neither sow nor reap nor gather into barns, and yet your heavenly Father feeds them. Are you not of more value than they? And which of you by being anxious can add a single hour to his span of life?" },
              { ref: "Matthew 6:33-34", text: "But seek first the kingdom of God and his righteousness, and all these things will be added to you. Therefore do not be anxious about tomorrow, for tomorrow will be anxious for itself. Sufficient for the day is its own trouble." },
              { ref: "Philippians 4:6-7", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." },
              { ref: "Isaiah 26:3", text: "You keep him in perfect peace whose mind is stayed on you, because he trusts in you." },
              { ref: "1 Peter 5:7", text: "Cast all your anxieties on him, because he cares for you." },
              { ref: "Psalm 23:4", text: "Even though I walk through the valley of the shadow of death, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
              { ref: "John 14:27", text: "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid." },
              { ref: "Romans 8:28", text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose." },
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
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What are you worried about right now?</label>
                  <textarea
                    value={jWorry}
                    onChange={e => setJWorry(e.target.value)}
                    placeholder="Name the specific worry &mdash; what future outcome or current uncertainty is looping in your mind..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What truth about God speaks directly to this worry?</label>
                  <textarea
                    value={jTruth}
                    onChange={e => setJTruth(e.target.value)}
                    placeholder="Which scripture, attribute of God, or past experience of his faithfulness is the right answer to this fear..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Write a brief prayer turning this worry over to God</label>
                  <textarea
                    value={jPrayer}
                    onChange={e => setJPrayer(e.target.value)}
                    placeholder="Following Philippians 4:6 &mdash; name your request specifically, and add a thanksgiving..."
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
                {e.worry && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Worry</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.worry}</p></div>}
                {e.truth && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Truth</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.truth}</p></div>}
                {e.prayer && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Prayer</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.prayer}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="BVqlMhSoRGg" title="Anxiety and the Christian &mdash; What Does the Bible Say?" />
            <VideoEmbed videoId="3N9KyOJDmq4" title="Do Not Worry &mdash; Matthew 6:25-34 Explained" />
            <VideoEmbed videoId="ZPNhAzsLaZw" title="Philippians 4:6-7 &mdash; The Peace That Passes Understanding" />
            <VideoEmbed videoId="L86wSMtzFQU" title="Charles Spurgeon on Anxiety and Trust in God" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
