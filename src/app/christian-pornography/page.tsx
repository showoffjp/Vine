"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Pornography as Idolatry — Worshipping the Image Instead of the Image-Bearer",
    verse: "Rom 1:22-25; Col 3:5",
    text: "They exchanged the glory of the immortal God for images... Therefore God gave them over to the sinful desires of their hearts to sexual impurity for the degrading of their bodies with one another (Rom 1:23-24). Paul&rsquo;s analysis of sexual sin begins with idolatry, not ethics. Pornography is first a worship disorder: it takes the image-bearers of God and reduces them to objects of consumption, substituting the counterfeit intimacy of the screen for the real intimacy of covenant relationship. Colossians 3:5 calls sexual immorality and impurity &ldquo;idolatry&rdquo; directly. The grammar of pornography is the grammar of idolatry: I want something from you that bypasses real relationship; I want the pleasure without the person. Recovery that addresses only behavior without addressing the underlying worship disorder will ultimately fail.",
  },
  {
    title: "The Brain Science of Pornography — Why Willpower Alone Is Not Enough",
    verse: "Rom 7:15-24",
    text: "I do not understand my own actions. For I do not do what I want, but I do the very thing I hate (Rom 7:15). Neuroscience has confirmed what Paul described: habitual pornography use rewires the brain&rsquo;s reward circuitry through the same dopamine pathways involved in drug addiction. Repeated exposure desensitizes reward receptors, requiring more extreme content to produce the same effect; it creates powerful neural associations between sexual arousal and the visual medium; and it builds habitual response patterns that bypass rational deliberation. This is not an excuse for sin but an explanation of why the person who genuinely wants to stop often cannot through willpower alone. Understanding the brain science produces compassion (for self and others) and practical wisdom: recovery requires restructuring the environment, the habits, and the neural associations, not simply making stronger moral resolutions.",
  },
  {
    title: "Gospel-Centered Recovery — Identity Before Behavior",
    verse: "1 Cor 6:18-20; 2 Cor 5:17",
    text: "Do you not know that your bodies are temples of the Holy Spirit... You are not your own; you were bought at a price (1 Cor 6:19-20). The dominant approach to sexual sin in much of the church has been shame-based behavior management: be more disciplined, try harder, feel worse about failing. The gospel reverses this order. Before behavior change comes identity change: you are not primarily a person with a pornography problem &mdash; you are a person who belongs to God, indwelt by the Spirit, declared righteous in Christ, and being renewed in the image of the one who created you (Col 3:10). Recovery that begins with identity (&ldquo;who am I in Christ?&rdquo;) rather than behavior (&ldquo;why can&rsquo;t I stop?&rdquo;) produces a different posture: not white-knuckling against shame but living from a new center.",
  },
  {
    title: "Sexual Brokenness and the Theology of the Body — What Sex Is For",
    verse: "Gen 2:24; Song of Songs",
    text: "That is why a man leaves his father and mother and is united to his wife, and they become one flesh (Gen 2:24). Pornography is not merely a violation of a rule; it is a destruction of a design. The biblical theology of sexuality reveals that sex is meant to be covenantal (binding two persons in permanent commitment), unitive (bringing them into one-flesh intimacy), and fruitful (open to life and generativity in some form). Pornography inverts every dimension of this design: it is anonymous rather than covenantal, isolating rather than unitive, and consuming rather than generative. John Paul II&rsquo;s Theology of the Body and C.S. Lewis&rsquo;s analysis in The Four Loves both insist that the problem with pornography is not that it takes sex too seriously but that it takes it too lightly &mdash; reducing to sensation what God designed as sacrament.",
  },
  {
    title: "Shame and Identity in Christ — the Difference Between Guilt and Condemnation",
    verse: "Rom 8:1; Ps 34:5",
    text: "There is now no condemnation for those who are in Christ Jesus (Rom 8:1). Shame is one of pornography&rsquo;s most effective tools for perpetuating its own cycle. The sequence typically runs: use &rarr; shame &rarr; isolation &rarr; use again. Shame drives people underground, away from the community and accountability that recovery requires. Biblical conviction (godly sorrow, 2 Cor 7:10) is different from shame: conviction says &ldquo;what I did was wrong and I need to bring it to the light&rdquo;; shame says &ldquo;I am fundamentally defective and must hide.&rdquo; The gospel breaks the shame cycle not by minimizing sin but by declaring its verdict in advance: in Christ, there is no condemnation. The person in recovery needs to hear this not once at conversion but repeatedly, especially in the moments after failure.",
  },
];

const practices = [
  {
    icon: "🔒",
    title: "Filtering and Accountability Software — Covenant Eyes and X3Watch",
    text: "Accountability software is not the solution to pornography addiction, but it is a necessary structural support for recovery. Covenant Eyes (covenanteyes.com) monitors and reports internet activity to an accountability partner; X3Watch performs a similar function. The goal is not surveillance but the removal of secret access — pornography thrives in secrecy, and these tools make secrecy structurally harder. Willpower is a depleting resource; environmental structure is a renewable one. Install filtering software on every device, and choose an accountability partner who will actually read the reports and ask honest questions.",
  },
  {
    icon: "👥",
    title: "Accountability Relationships — the Practice of Speaking in the Light",
    text: "Confess your sins to each other and pray for each other so that you may be healed (James 5:16). Recovery from pornography addiction almost never happens in isolation. The pattern of addiction is fundamentally a pattern of hiding, and the antidote to hiding is bringing what is hidden into the light of a trusted relationship. An accountability relationship requires more than asking &ldquo;did you look at porn this week?&rdquo; &mdash; it requires asking about the conditions that precede use: sleep, stress, loneliness, resentment, emotional state. Groups like Celebrate Recovery, Pure Desire, and Sex Addicts Anonymous (for Christians) provide structured community for this kind of accountability.",
  },
  {
    icon: "🧠",
    title: "Understanding Your Cycle — Mapping Triggers, Moods, and Behaviors",
    text: "Most pornography use follows a predictable cycle: a trigger (loneliness, boredom, stress, rejection, late night) leads to a mood state (anxiety, desire for escape, numbness) that produces a behavior (browsing, then use) followed by shame and temporary relief. Mapping your specific cycle &mdash; what triggers you, what internal state precedes use, what environmental conditions are present &mdash; is the foundation of behavioral recovery. When you know your cycle, you can intervene earlier in it. An interruption at the trigger stage is far less effortful than white-knuckling at the moment of temptation.",
  },
  {
    icon: "✝️",
    title: "Replacing the Ritual — Filling the Void with Something Real",
    text: "Recovery is not only about stopping something; it is about starting something. Pornography typically fills a function: relief from stress, escape from loneliness, a counterfeit form of connection or pleasure. Simply removing the behavior without addressing the underlying need it was meeting leaves a vacuum that something else will fill. What practices of genuine connection, embodied rest, or honest emotional processing can replace the pornography ritual in your specific circumstances? This is not about substituting another addiction; it is about learning to meet real needs through real means.",
  },
  {
    icon: "📖",
    title: "Meditating on the Theology of the Body — Seeing People as Persons",
    text: "One of the most powerful long-term practices for recovery is cultivating the capacity to see people as persons rather than objects. This is not merely a matter of willpower but of contemplative formation. Regular practices of the presence of God (the awareness that every person I encounter is an image-bearer standing before their Creator), lectio divina with passages on human dignity, and the deliberate practice of attending to the personhood of those around you gradually reshape the gaze. It is a slow rewiring of the imagination, but it is possible, and it is perhaps the deepest form of recovery.",
  },
];

const scriptures = [
  { verse: "1 Cor 6:18-20", text: "Flee from sexual immorality. All other sins a person commits are outside the body, but whoever sins sexually, sins against their own body. Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies." },
  { verse: "Rom 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective." },
  { verse: "2 Cor 5:17", text: "Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" },
  { verse: "Matt 5:28", text: "But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart." },
  { verse: "Ps 34:5", text: "Those who look to him are radiant; their faces are never covered with shame." },
  { verse: "Phil 4:8", text: "Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable — if anything is excellent or praiseworthy — think about such things." },
];

const voices = [
  {
    name: "John Mark Comer",
    role: "Loveology; Pastor and Author",
    quote: "The problem with pornography isn&rsquo;t that it takes sex too seriously &mdash; it&rsquo;s that it takes it too lightly. It reduces to a commodity what God designed as a covenant. And the tragedy is not just the sin itself but the way it slowly deforms the imagination, so that what you see is no longer a person but a prop in your own story.",
    bio: "Comer&rsquo;s pastoral and theological writing on sexuality, particularly in Loveology, offers one of the most readable and theologically serious treatments of pornography available for a general Christian audience. He frames pornography not primarily as a moral failure but as a worship disorder that deforms the capacity for genuine intimacy &mdash; and insists that recovery requires not just behavior management but the renewal of the imagination.",
  },
  {
    name: "Dr. William Struthers",
    role: "Wired for Intimacy; Neurobiologist and Professor",
    quote: "The male brain is wired to respond to visual sexual stimuli in ways that are immediate and powerful. Pornography hijacks this wiring and trains the brain to associate sexual arousal with the screen rather than with a real person. This is not a character flaw &mdash; it is a neurological reality. But neuroplasticity also means that what has been wired can be rewired, given the right conditions, practices, and relationships.",
    bio: "Struthers&rsquo;s Wired for Intimacy remains the most accessible and thorough scientific treatment of how pornography affects the male brain. As a Christian neuroscientist, he brings both scientific precision and theological sensitivity to a topic where many Christians have only moral categories. His work has become foundational in gospel-centered recovery ministry.",
  },
  {
    name: "Dr. Dan Allender",
    role: "The Wounded Heart; Counselor and Theologian",
    quote: "Sexual brokenness &mdash; whether in the form of pornography, promiscuity, or the abuse that often underlies them &mdash; is almost never just about sex. It is about what we believe about ourselves, about our lovability, about whether we are fundamentally safe or fundamentally at risk. Recovery requires addressing not just the behavior but the story that the behavior is trying to solve.",
    bio: "Allender&rsquo;s clinical and theological work on sexual brokenness, particularly in The Wounded Heart and Healing the Wounded Heart, has helped thousands of people and pastors understand the deep roots of sexual addiction. His insistence that sexual sin is almost always connected to deeper wounds of shame, attachment, and self-worth has reshaped how many Christian counselors approach pornography and sexual brokenness.",
  },
];

const videos = [
  { id: "H0lTMWp5GQo", title: "The Porn Problem: A Christian Response" },
  { id: "l9LGMNRpOBg", title: "Gospel-Centered Recovery from Pornography" },
  { id: "1A8JVE7XFXY", title: "Wired for Intimacy — Dr. William Struthers on the Brain and Pornography" },
  { id: "e8Yw3eG0XO0", title: "Shame, Identity, and Freedom from Sexual Sin" },
];

type PRNEntry = { id: string; date: string; struggle: string; root: string; step: string };

export default function ChristianPornographyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PRNEntry[]>(() => {
    try {
      const s = localStorage.getItem("vine_christianpornography_entries");
      return s ? JSON.parse(s) : [];
    } catch {
      return [];
    }
  });
  const [jStruggle, setJStruggle] = useState("");
  const [jRoot, setJRoot] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    localStorage.setItem("vine_christianpornography_entries", JSON.stringify(entries));
  }, [entries]);

  const saveEntry = () => {
    if (!jStruggle.trim()) return;
    setEntries(prev => [
      { id: Date.now().toString(), date: new Date().toLocaleDateString(), struggle: jStruggle, root: jRoot, step: jStep },
      ...prev,
    ]);
    setJStruggle("");
    setJRoot("");
    setJStep("");
  };

  const deleteEntry = (id: string) => setEntries(prev => prev.filter(e => e.id !== id));

  const tabs = [
    { id: "theology", label: "Theology" },
    { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" },
    { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" },
    { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>

        <div style={{ marginBottom: "0.5rem" }}>
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Purity</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Freedom from Pornography
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Pornography is not simply a habit to break &mdash; it is a worship disorder, a neurological pattern, and a wound that hides in shame. Gospel-centered recovery begins not with willpower but with identity: you are not your struggle. You belong to God.
        </p>

        <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              padding: "0.45rem 1.1rem", borderRadius: 20, border: "1px solid", fontSize: "0.85rem", fontWeight: 600, cursor: "pointer",
              borderColor: tab === t.id ? ACCENT : BORDER,
              background: tab === t.id ? ACCENT + "22" : "transparent",
              color: tab === t.id ? ACCENT : MUTED,
            }}>{t.label}</button>
          ))}
        </div>

        {/* THEOLOGY */}
        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map(item => (
              <div key={item.title} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ fontSize: "0.78rem", color: ACCENT, fontWeight: 600, marginBottom: "0.4rem", letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ color: ACCENT, fontWeight: 700, fontSize: "1.05rem", margin: "0 0 0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0, fontSize: "0.95rem" }} dangerouslySetInnerHTML={{ __html: item.text }} />
              </div>
            ))}
          </div>
        )}

        {/* PRACTICES */}
        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Practices</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "0.6rem" }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem", margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.92rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* VOICES */}
        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Voices</h2>
            {voices.map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
                  <div style={{ color: ACCENT, fontSize: "0.85rem", marginTop: "0.15rem" }}><em>{v.role}</em></div>
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
            {scriptures.map(s => (
              <div key={s.verse} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>&ldquo;{s.text}&rdquo;</p>
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
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What pattern or struggle are you naming before God?</label>
                  <textarea
                    value={jStruggle}
                    onChange={e => setJStruggle(e.target.value)}
                    placeholder="Be honest and specific &mdash; shame thrives in vagueness..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What deeper need or wound might this be trying to meet or hide?</label>
                  <textarea
                    value={jRoot}
                    onChange={e => setJRoot(e.target.value)}
                    placeholder="Loneliness, stress, shame, a craving for connection or escape..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is one concrete step toward light, accountability, or healing?</label>
                  <textarea
                    value={jStep}
                    onChange={e => setJStep(e.target.value)}
                    placeholder="Tell a trusted person, install Covenant Eyes, call a counselor, pray Ps 34:5..."
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
                {e.struggle && (
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Struggle</span>
                    <p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.struggle}</p>
                  </div>
                )}
                {e.root && (
                  <div style={{ marginBottom: "0.5rem" }}>
                    <span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Root</span>
                    <p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.root}</p>
                  </div>
                )}
                {e.step && (
                  <div>
                    <span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Next Step</span>
                    <p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.step}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            {videos.map(v => (
              <div key={v.id}>
                <h3 style={{ marginBottom: "0.6rem", fontWeight: 600, fontSize: "0.95rem", color: ACCENT }}>{v.title}</h3>
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
