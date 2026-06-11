"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type ADDEntry = { id: string; date: string; substance: string; root: string; freedom: string };

export default function ChristianAddictionPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ADDEntry[]>(() => {
    try { const s = localStorage.getItem("vine_christianaddiction_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jSubstance, setJSubstance] = useState("");
  const [jRoot, setJRoot] = useState("");
  const [jFreedom, setJFreedom] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianaddiction_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jSubstance.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), substance: jSubstance, root: jRoot, freedom: jFreedom }, ...prev]);
    setJSubstance(""); setJRoot(""); setJFreedom("");
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
          Addiction &amp; the Christian
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Addiction is not merely a habit or a weakness of will &mdash; it is misdirected worship, a hijacked longing for transcendence. Grace does not bypass the brain; it works through community, accountability, and the slow reorientation of desire toward the living God. This guide explores the theology, science, and practice of freedom.
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
                title: "Addiction as Broken Worship &mdash; Augustine&rsquo;s Restless Heart",
                body: "Our heart is restless until it rests in you, Augustine wrote. Addiction is the shadow of this longing &mdash; a real craving for transcendence, relief, and aliveness that latches onto a substance or behavior because that substance delivers a short-circuit to what only God can ultimately provide. Gerald May in <em>Addiction and Grace</em> argues that addictions are attachments, and that all humans are addicted to something &mdash; that the addict is simply a visible version of the universal human condition. This theological framing refuses to reduce addiction to mere moral failure or pure disease; it is disordered desire in a world where desire itself is made for God.",
              },
              {
                title: "The Brain Science of Addiction and Grace &mdash; What Neuroscience Teaches the Church",
                body: "Modern neuroscience has revealed that addiction involves profound changes in the dopamine reward system &mdash; the nucleus accumbens, the prefrontal cortex, the amygdala. These changes make craving compulsive and relapse predictable rather than simply chosen. The church must hold this alongside the doctrine of the will: addiction diminishes but does not eliminate moral agency. Grace is not magic that bypasses neurobiology; it typically works through means: community, accountability, therapy, medication-assisted treatment where appropriate, spiritual practice. Condemning the addict for their compulsion while ignoring the neurological reality is like condemning the diabetic for their insulin response.",
              },
              {
                title: "Celebrate Recovery &mdash; A Christian 12-Step Framework",
                body: "Celebrate Recovery, founded by John Baker at Saddleback Church in 1991, is the largest Christian recovery program in the world, with over 35,000 programs in churches globally. It adapts the 12 steps explicitly to Christ &mdash; naming God as the Higher Power rather than leaving that definition open. The eight recovery principles are drawn from the Beatitudes (Matt 5:3-12), grounding the program in the Sermon on the Mount. CR broadens the recovery framework beyond chemical addictions to include codependency, food addiction, anger, and other hurts, habits, and hang-ups &mdash; reflecting the conviction that all humans have areas where grace needs to displace control.",
              },
              {
                title: "Relapse, Shame, and Forgiveness &mdash; the Gospel for the Addict Who Falls Again",
                body: "One of the most pastorally critical questions is: what does the gospel say to the person who has been clean for six months and relapsed? The shame spiral &mdash; I&rsquo;ve failed again, God is done with me, I&rsquo;m hopeless &mdash; is often more spiritually dangerous than the relapse itself. Shame drives the person further from the community and from God precisely when they most need both. Lamentations 3:22-23 &mdash; his mercies are new every morning &mdash; and 1 John 1:9 are not just comfort verses; they are structural to the recovery journey. Relapse is not the end of the story; it is a chapter in a longer story of grace.",
              },
              {
                title: "Supporting Addicted Family Members &mdash; Love, Boundaries, and Enabling",
                body: "Loving someone in active addiction is one of the most spiritually and emotionally exhausting experiences a family can face. The theological challenge is to distinguish love from enabling: love desires the genuine good of the other; enabling removes the consequences that might motivate change. Al-Anon and Nar-Anon exist precisely because the family system is also shaped by the addiction. The Christian family member is called to love without illusion &mdash; to hold boundaries not as punishment but as an act of love that refuses to participate in the addict&rsquo;s destruction. This is costly, requires community support, and must be bathed in prayer and pastoral counsel.",
              },
              {
                title: "Alcohol, Drugs, and Gambling &mdash; Specific Pastoral Considerations",
                body: "Alcohol is the most socially normalized addictive substance in American Christian culture, which creates pastoral complications: the church&rsquo;s fellowship culture often centers food and drink, and the alcoholic in recovery faces constant environmental triggers. Drug addiction &mdash; whether illicit or prescription &mdash; carries additional stigma even within the church. Gambling addiction, often invisible, exploits the same reward pathways as chemical addiction. Each of these requires specific pastoral wisdom: the alcohol-addicted person may need to explain why they do not participate in communion wine; the gambling addict may need financial accountability. The church must be a safe place to name all of these without judgment.",
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
              "If you or someone you love is struggling with addiction, connect with a <strong>Celebrate Recovery</strong> group at a local church. The program is free, Christ-centered, and specifically designed for the &ldquo;hurts, habits, and hang-ups&rdquo; that mark every human life &mdash; not only chemical dependency.",
              "Practice naming the <strong>feeling beneath the craving</strong>: before reaching for the substance or behavior, pause and ask &mdash; what am I actually feeling right now? Loneliness? Anxiety? Shame? Boredom? Addiction hijacks the search for relief; learning to name the underlying need is the beginning of redirecting it.",
              "Build a <strong>daily rhythm of accountability</strong>: a sponsor, a recovery companion, or a trusted friend who knows your struggle and can be called when the craving is acute. Addiction thrives in isolation; community is not optional for recovery but structural to it.",
              "If you are a family member of an addict, attend <strong>Al-Anon or Nar-Anon</strong> (or a church equivalent), not as an admission of failure but as an act of wisdom. You need a community that understands the specific dynamics of loving someone in active addiction.",
              "Practice <strong>lament as a spiritual discipline</strong>: the honest naming before God of what addiction has cost &mdash; your own compulsion, the pain it has caused others, the losses accumulated. This is not wallowing but bringing the reality of your life to the God who is not surprised by it.",
              "When relapse happens, resist the shame spiral by returning immediately to community and to God. Memorize 1 John 1:9 and Lamentations 3:22-23. Relapse is a data point about where more support is needed, not a verdict on your ultimate worth or on God&rsquo;s willingness to receive you.",
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
                name: "Gerald May",
                work: "Addiction and Grace",
                quote: "Grace is the most powerful force in the universe. It can transcend repression, addiction, and every other binding of the human spirit. Grace is not exempt from the struggle with desire, but it is the ultimate triumph over it.",
                bio: "Gerald May was a psychiatrist and senior fellow at the Shalem Institute for Spiritual Formation in Washington D.C. <em>Addiction and Grace</em> (1988) is a landmark work arguing that addiction &mdash; broadly understood as any compulsive attachment &mdash; is the central spiritual problem of human existence, and that grace is the only ultimate liberation from it. May wrote from both clinical experience and deep contemplative practice.",
              },
              {
                name: "John Baker",
                work: "Life&rsquo;s Healing Choices",
                quote: "Happy are those who know they are spiritually poor. That&rsquo;s where recovery begins &mdash; admitting that on our own, we are powerless and that our lives have become unmanageable. The first step toward healing is acknowledging our need.",
                bio: "John Baker is the founder of Celebrate Recovery, the largest Christ-centered recovery program in the world. Baker himself struggled with alcohol addiction before founding CR at Saddleback Church in 1991. <em>Life&rsquo;s Healing Choices</em> grounds the eight recovery principles explicitly in the Beatitudes, arguing that Jesus&rsquo; Sermon on the Mount is the world&rsquo;s first recovery program.",
              },
              {
                name: "Edward T. Welch",
                work: "Crossroads: A Step-by-Step Guide Away from Addiction",
                quote: "Addictions are less about feeling good and more about avoiding pain. Behind every addiction is a person who has found something that quiets fears, soothes hurts, and manages anger. The gospel meets us in those exact places of pain.",
                bio: "Edward T. Welch is a licensed psychologist and faculty member at the Christian Counseling &amp; Educational Foundation (CCEF). His work on addiction is distinctive in addressing the emotional and spiritual dynamics beneath substance use rather than focusing primarily on behavior modification. Welch takes both the neurological reality of addiction and the spiritual category of worship seriously, refusing to collapse one into the other.",
              },
              {
                name: "Brennan Manning",
                work: "The Ragamuffin Gospel",
                quote: "The gospel declares that no matter how dutiful or prayerful we are, we can&rsquo;t save ourselves. What we do with our failures is the most telling indicator of our relationship with God. Genuine repentance is not feeling sorry; it is turning &mdash; and the alcoholic who gets up again has understood grace more deeply than many respectable Christians.",
                bio: "Brennan Manning was a former Franciscan priest who struggled publicly and repeatedly with alcoholism throughout his life and ministry. His candor about his own addiction &mdash; and the grace that met him in it &mdash; made <em>The Ragamuffin Gospel</em> one of the most important books on grace of the late 20th century. Manning&rsquo;s theology was forged in the specific crucible of addiction and forgiveness.",
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
              { ref: "Romans 7:15", text: "For I do not understand my own actions. For I do not do what I want, but I do the very thing I hate." },
              { ref: "Romans 8:1-2", text: "There is therefore now no condemnation for those who are in Christ Jesus. For the law of the Spirit of life has set you free in Christ Jesus from the law of sin and death." },
              { ref: "1 Corinthians 10:13", text: "No temptation has overtaken you that is not common to man. God is faithful, and he will not let you be tempted beyond your ability, but with the temptation he will also provide the way of escape, that you may be able to endure it." },
              { ref: "John 8:36", text: "So if the Son sets you free, you will be free indeed." },
              { ref: "2 Corinthians 12:9", text: "But he said to me, &ldquo;My grace is sufficient for you, for my power is made perfect in weakness.&rdquo; Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me." },
              { ref: "James 5:16", text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working." },
              { ref: "Lamentations 3:22-23", text: "The steadfast love of the Lord never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." },
              { ref: "Psalm 40:2", text: "He drew me up from the pit of destruction, out of the miry bog, and set my feet upon a rock, making my steps secure." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Recovery Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What substance, behavior, or pattern are you struggling with?</label>
                  <textarea
                    value={jSubstance}
                    onChange={e => setJSubstance(e.target.value)}
                    placeholder="Name it honestly — alcohol, pornography, gambling, food, a relationship..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What deeper need or pain is it meeting — what is the root?</label>
                  <textarea
                    value={jRoot}
                    onChange={e => setJRoot(e.target.value)}
                    placeholder="Loneliness? Anxiety? Shame? Boredom? The craving that drives the addiction..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What does freedom look like — what step can you take today?</label>
                  <textarea
                    value={jFreedom}
                    onChange={e => setJFreedom(e.target.value)}
                    placeholder="Calling a sponsor, attending a CR meeting, naming it to a friend, confessing it to God..."
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
                {e.substance && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Substance / Pattern</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.substance}</p></div>}
                {e.root && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Root</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.root}</p></div>}
                {e.freedom && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Freedom Step</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.freedom}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="mHMekRzxBYI" title="Addiction and Grace &mdash; Gerald May on the Spiritual Roots of Addiction" />
            <VideoEmbed videoId="6PqE9wBFPvU" title="Celebrate Recovery: How the 12 Steps Meet the Beatitudes" />
            <VideoEmbed videoId="8r6HZjFpkUM" title="The Gospel for the Addict &mdash; Romans 7 and the Power of Grace" />
            <VideoEmbed videoId="5IpYOF4Hi6Q" title="Addiction, the Brain, and What the Church Needs to Know" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
