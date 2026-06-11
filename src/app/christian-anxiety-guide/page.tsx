"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

type ANEntry = { id: string; date: string; trigger: string; truth: string; practice: string };

export default function ChristianAnxietyGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ANEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christiananxiety_entries") ?? "[]"); } catch { return []; }
  });
  const [jTrigger, setJTrigger] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jPractice, setJPractice] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiananxiety_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jTrigger.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), trigger: jTrigger, truth: jTruth, practice: jPractice }, ...prev]);
    setJTrigger(""); setJTruth(""); setJPractice("");
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
          Anxiety &amp; the Christian
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Anxiety is one of the most common struggles in contemporary life &mdash; and one the Scripture speaks to with startling directness. This guide explores the biblical response to anxiety, the difference between clinical anxiety and spiritual struggle, the gift of lament, and the practices that open us to God&rsquo;s peace.
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
                title: "Do Not Be Anxious &mdash; a Command and an Invitation (Philippians 4:6-7)",
                body: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus. Paul does not say <em>stop feeling anxious</em> through willpower; he redirects the anxious person toward prayer. The grammar is present imperative &mdash; stop being anxious &mdash; but the means is not suppression but re-direction toward God. The promise is not the removal of circumstances but a peace that <em>surpasses understanding</em> &mdash; a peace that stands guard even when the mind cannot compute its way through the situation. Anxiety is not a sin; it is a signal. The question is whether we turn that signal toward God or allow it to spiral.",
              },
              {
                title: "Cast All Your Anxiety on Him (1 Peter 5:7)",
                body: "Cast all your anxiety on him, because he cares for you. The Greek word for &ldquo;cast&rdquo; (epiript&#333;) is the same word used for throwing a cloak onto a donkey (Luke 19:35) &mdash; an action of deliberate transfer, not gradual release. We are not told to manage or reduce anxiety but to throw it onto God. The basis is not technique but theology: <em>because he cares for you</em>. The cure for anxiety in Peter&rsquo;s framework is not relaxation but relationship &mdash; a God who is genuinely interested in what troubles you. Many anxious Christians secretly believe their anxiety is too small or too irrational for God&rsquo;s attention; Peter insists there is no such category.",
              },
              {
                title: "Clinical Anxiety and Spiritual Struggle &mdash; A Necessary Distinction",
                body: "Anxiety disorders (generalized anxiety, panic disorder, OCD, PTSD, social anxiety) are real neurological and psychological conditions &mdash; not merely spiritual failures. The brain&rsquo;s threat-detection system can misfire due to genetics, trauma, or chronic stress. Telling a person with a panic disorder to simply trust God more is like telling a person with a broken leg to simply walk in faith. Scripture never equates anxiety with sin. Jesus himself was deeply distressed in Gethsemane (Mark 14:33 &mdash; ekthambe&#333;, to be greatly dismayed). The question is not whether anxiety is present but what we do with it. Christians can pursue therapy, medication, and spiritual practice simultaneously &mdash; these are not competing but complementary. The body is a gift; caring for the brain is not a failure of faith.",
              },
              {
                title: "Do Not Worry About Tomorrow &mdash; the Logic of Matthew 6:25-34",
                body: "Therefore I tell you, do not be anxious about your life. Jesus&rsquo; argument against worry is not dismissive but theological. He points to birds and lilies not to say <em>life is easy</em> but to demonstrate the Father&rsquo;s attentive, detailed care for creation. The logic is from lesser to greater: if God clothes the grass, how much more will he clothe you? The phrase <em>O you of little faith</em> is not a rebuke but an invitation &mdash; the disciples&rsquo; faith is small because their vision of the Father is small. Worry about tomorrow is, in Jesus&rsquo; framework, a failure of imagination about who God is. Seeking first the kingdom is the counter-practice: to orient the whole of life around what is most real and lasting.",
              },
              {
                title: "Lament vs. Worry &mdash; What the Psalms Teach About Honest Pain",
                body: "The Psalms contain 150 songs &mdash; and approximately a third are laments. Lament is not worry; it is honest, directed grief. Worry is anxiety that circles in on itself; lament is anxiety turned outward toward God in honest speech. Psalm 22 begins, My God, my God, why have you forsaken me? &mdash; words Jesus himself cried from the cross. The psalmists do not suppress their anguish; they do not perform peace they do not have; they bring their fear, anger, confusion, and grief directly to God. Lament is the form of prayer for the person who cannot simply <em>think positive</em> &mdash; it honors both the reality of suffering and the sovereignty of the God being addressed. Learning to lament is one of the most important spiritual disciplines for an anxious age.",
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
              "Practice <em>breath prayer</em> as a simple anxiety anchor: inhale slowly for four counts while silently praying &ldquo;Lord&rdquo; &mdash; hold briefly &mdash; exhale for four counts while praying &ldquo;have mercy.&rdquo; This combines physiological regulation (slow breathing activates the parasympathetic nervous system) with theological orientation (God is present and attentive). Do not treat this as a technique apart from prayer; it is prayer embodied.",
              "When anxiety rises, practice the <em>cast</em> movement of 1 Peter 5:7: stop, name the specific anxiety aloud or in writing (&ldquo;I am anxious about...&rdquo;), and then speak a deliberate prayer of transfer: &ldquo;Lord, I am casting this onto you. You care for me.&rdquo; The specificity matters &mdash; vague anxiety tends to expand; named anxiety can be handed over.",
              "Practice Philippians 4:8 as a cognitive re-anchor: when anxious thoughts spiral, name one thing that is true, one thing that is honorable, one thing that is just &mdash; not to deny the anxiety but to broaden attention beyond the threat. Paul calls this <em>thinking on these things</em> &mdash; an active, intentional practice, not a passive optimism.",
              "If anxiety is chronic or impairing, consider seeking a therapist trained in Cognitive Behavioral Therapy (CBT) or EMDR, especially for trauma-rooted anxiety. Seeking professional care is not a failure of faith &mdash; it is stewardship of the mind and body God gave you. Many Christians find that therapy and spiritual direction work powerfully together.",
              "Cultivate a lament practice: set aside time to write or speak to God about what is genuinely frightening you, without performing peace you do not have. Use Psalms 22, 42, 46, or 88 as templates. Allow yourself to say to God what is actually true. The Psalms model this as a legitimate and even vital form of prayer.",
              "Examine what your anxiety is telling you about your image of God: anxious Christians often unconsciously believe God is inattentive, irritated, or unable to handle their particular situation. Bring that image into the light and test it against Scripture &rsquo;s witness to the Father who runs to meet prodigals and cares about sparrows.",
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
                work: "Lectures to My Students",
                quote: "I find myself frequently depressed &mdash; perhaps more so than any other person here... I would not, however, lose those seasons of depression; they are often the nursery of my richer experiences. The Lord has, in his infinite wisdom, chosen to exercise many of his most eminent servants in this way.",
                bio: "Charles Spurgeon, the great Victorian Baptist preacher, suffered from severe depression and anxiety for much of his life &mdash; including during his most productive years of ministry. He wrote and preached about his struggles with unusual candor for his era. His willingness to name his own darkness without abandoning his faith has been a lifeline for generations of Christians who struggle with mental health and feel ashamed of it.",
              },
              {
                name: "Martyn Lloyd-Jones",
                work: "Spiritual Depression: Its Causes and Cures",
                quote: "The main trouble in this whole matter of spiritual depression in a sense is this, that we allow our self to talk to us instead of talking to our self. Have you realized that most of your unhappiness in life is due to the fact that you are listening to yourself instead of talking to yourself?",
                bio: "Martyn Lloyd-Jones was a Welsh physician-turned-minister who served at Westminster Chapel, London for many years. His classic work on spiritual depression &mdash; drawn from a sermon series on Psalm 42 &mdash; remains one of the most practically useful treatments of the intersection of faith, emotion, and mental life. Lloyd-Jones insists on distinguishing spiritual causes from physical causes of depression and anxiety, and refuses to reduce the problem to either category alone.",
              },
              {
                name: "Kathleen Norris",
                work: "Acedia &amp; Me",
                quote: "Anxiety is a signal to pay attention, not necessarily to the thing that is making us anxious, but to the fact that something in us is asking to be noticed. The spiritual traditions counsel neither repression nor indulgence but transformation.",
                bio: "Kathleen Norris is an American poet and oblate of a Benedictine monastery whose spiritual memoirs bridge contemplative tradition and contemporary life. Her exploration of acedia &mdash; the ancient desert father category for spiritual sloth and restless unease &mdash; illuminates the deep connection between anxiety, boredom, and the avoidance of genuine presence. Her work suggests that much contemporary anxiety has a spiritual root in our unwillingness to simply be still and present.",
              },
              {
                name: "Timothy Keller",
                work: "Walking with God through Pain and Suffering",
                quote: "The Scripture does not say, be anxious for nothing because you have been given a worry-management strategy. It says, be anxious for nothing, and the peace of God will guard your heart. The guard is not a technique; the guard is a person &mdash; the God who keeps what is committed to him.",
                bio: "Timothy Keller was the founding pastor of Redeemer Presbyterian Church in Manhattan and one of the most theologically careful and culturally engaged evangelical voices of the late twentieth and early twenty-first centuries. His treatments of suffering, doubt, and anxiety are marked by unusual intellectual honesty and pastoral warmth. He consistently refused to offer thin comfort to those who suffer.",
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
              { ref: "Philippians 4:6-7", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." },
              { ref: "Matthew 6:25-27", text: "Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on. Is not life more than food, and the body more than clothing? Look at the birds of the air: they neither sow nor reap nor gather into barns, and yet your heavenly Father feeds them. Are you not of more value than they?" },
              { ref: "1 Peter 5:7", text: "Cast all your anxiety on him, because he cares for you." },
              { ref: "Psalm 42:5", text: "Why are you cast down, O my soul, and why are you in turmoil within me? Hope in God; for I shall again praise him, my salvation and my God." },
              { ref: "Isaiah 41:10", text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand." },
              { ref: "Matthew 11:28-29", text: "&ldquo;Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls.&rdquo;" },
              { ref: "Psalm 22:1-2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? O my God, I cry out by day, but you do not answer, by night, but I find no rest." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Anxiety &amp; Truth Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is triggering your anxiety right now?</label>
                  <textarea
                    value={jTrigger}
                    onChange={e => setJTrigger(e.target.value)}
                    placeholder="Name it specifically &mdash; vague anxiety expands; named anxiety can be handed over..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is true about God in the middle of this?</label>
                  <textarea
                    value={jTruth}
                    onChange={e => setJTruth(e.target.value)}
                    placeholder="What does Scripture say about what God is doing, what he is like, what he promises..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What practice will you take into this anxiety today?</label>
                  <textarea
                    value={jPractice}
                    onChange={e => setJPractice(e.target.value)}
                    placeholder="Breath prayer, casting prayer, lament, calling a friend, making an appointment..."
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
                {e.trigger && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Trigger</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.trigger}</p></div>}
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
            <VideoEmbed videoId="3oFsLMk5vMQ" title="Anxiety and the Christian: What Does the Bible Say?" />
            <VideoEmbed videoId="hbAETqeD7VQ" title="Philippians 4:6-7 &mdash; The Peace That Passes Understanding" />
            <VideoEmbed videoId="K8JKU2DPLT0" title="When Christians Struggle with Anxiety and Depression" />
            <VideoEmbed videoId="oVMBXt1BKII" title="Breath Prayer: A Simple Practice for an Anxious Age" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
