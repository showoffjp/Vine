"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

type ENVEntry = { id: string; date: string; trigger: string; root: string; antidote: string };

export default function ChristianEnvyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ENVEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianenvy_entries") ?? "[]"); } catch { return []; }
  });
  const [jTrigger, setJTrigger] = useState("");
  const [jRoot, setJRoot] = useState("");
  const [jAntidote, setJAntidote] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianenvy_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jTrigger.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), trigger: jTrigger, root: jRoot, antidote: jAntidote }, ...prev]);
    setJTrigger(""); setJRoot(""); setJAntidote("");
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
          Envy &amp; the Christian
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Envy is more than jealousy &mdash; it is grief at another&rsquo;s good. From Cain&rsquo;s murderous resentment to the scroll of social media comparison, envy strikes at the root of love. The gospel offers an identity so secure that another&rsquo;s blessing becomes cause for celebration, not threat.
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
                title: "The First Murder Was Motivated by Envy &mdash; Cain and Abel (Genesis 4:4-8)",
                body: "The LORD had regard for Abel and his offering, but for Cain and his offering he had no regard. So Cain was very angry, and his face fell. Envy appears in Scripture&rsquo;s fourth chapter &mdash; among humanity&rsquo;s first recorded sins. What Cain could not tolerate was not that he lacked something good but that Abel had something good he did not share. This is the essence of envy: not simply wanting what another has, but resenting that they have it. God&rsquo;s diagnostic question to Cain is still the right question: Why are you angry, and why has your face fallen? If you do well, will you not be accepted? Envy begins as a refusal to believe that God&rsquo;s goodness to another does not diminish his goodness to us.",
              },
              {
                title: "Envy and the Erosion of Friendship &mdash; Saul and David (1 Samuel 18:6-9)",
                body: "The women sang to one another as they celebrated, Saul has struck down his thousands, and David his ten thousands. And Saul was very angry, and this saying displeased him... And Saul eyed David from that day on. Saul&rsquo;s trajectory from envy to attempted murder is one of Scripture&rsquo;s most detailed case studies. The word &ldquo;eyed&rdquo; (Hebrew: &ayin) carries the sense of the evil eye &mdash; a gaze of malice rooted in resentment. What had begun as admiration curdled into hatred not because David had wronged Saul, but because David had been praised. Envy does not require an enemy; it can destroy a friendship through nothing but comparison.",
              },
              {
                title: "Envy Forbidden in the Commandments &mdash; Covetousness (Exodus 20:17)",
                body: "You shall not covet your neighbor&rsquo;s house; you shall not covet your neighbor&rsquo;s wife, or his male servant, or his female servant, or his ox, or his donkey, or anything that is your neighbor&rsquo;s. The tenth commandment is remarkable because it regulates not action but desire. Every other commandment addresses behavior; this one reaches into the interior life. To covet is to fix desire on what belongs to another in a way that resents their possession of it. The rabbis observed that covetousness is the root from which theft, adultery, and false witness grow &mdash; exterior sins are almost always watered by interior envy. Paul testifies in Romans 7:7 that the commandment against coveting was the one that brought his inner sinfulness into the light.",
              },
              {
                title: "Comparison Culture and the Social Media Scroll",
                body: "Envy has always been fed by comparison, but never has comparison been so relentlessly curated and delivered. Social media presents a continuous feed of others&rsquo; highlight reels &mdash; their achievements, vacations, marriages, promotions, children, and aesthetics &mdash; against which we measure our own unedited lives. Theodore Roosevelt&rsquo;s line is apt: comparison is the thief of joy. The research confirms it: passive social media consumption is correlated with envy, depression, and decreased life satisfaction. The Christian is not immune to these dynamics but has a resource that secular psychology cannot offer: a fixed identity not determined by relative standing among peers but by the unchanging declaration of the Father: this is my beloved child.",
              },
              {
                title: "The Gospel Remedy &mdash; Identity in Christ (Galatians 2:20)",
                body: "I have been crucified with Christ. It is no longer I who live, but Christ who lives in me. Envy depends on a self whose worth is determined by comparative standing. The gospel dismantles that self. The Christian&rsquo;s identity is not constructed through achievement, comparison, or social recognition but received as gift in union with Christ. When I know who I am in Christ &mdash; loved, accepted, called, and co-heired with the Son &mdash; another&rsquo;s success does not threaten that standing. It cannot be diminished by someone else&rsquo;s promotion, praise, or beauty. This is the deepest structural remedy for envy: not willpower against the feeling but a new foundation for the self that makes comparative diminishment logically impossible.",
              },
              {
                title: "Rejoicing with Those Who Rejoice (Romans 12:15)",
                body: "Rejoice with those who rejoice, weep with those who weep. Paul&rsquo;s instruction is deceptively simple and practically demanding. To rejoice with those who rejoice requires exactly what envy refuses: genuine gladness at another&rsquo;s good. The antidote to envy is not stoic indifference but active celebration. Chrysostom noted that it is easier to weep with those who weep than to rejoice with those who rejoice &mdash; sorrow creates solidarity, but joy can create distance and resentment if we are not rooted in love. The practice of genuine, expressed celebration of another&rsquo;s good is one of envy&rsquo;s most effective enemies.",
              },
              {
                title: "Generosity as Envy-Killer",
                body: "Envy and generosity cannot coexist. Envy grieves at another&rsquo;s good; generosity actively works for it &mdash; giving from one&rsquo;s own store to add to another&rsquo;s blessing. The person who has cultivated the habit of giving finds that the grip of envy loosens, because generosity retrains the heart to find joy in another&rsquo;s having rather than grief. 2 Corinthians 9:7 describes the cheerful giver whom God loves &mdash; hilaron, from which we get hilarious: the generous person has discovered a joke that envy never gets, that there is enough, that God&rsquo;s abundance is not a zero-sum game, and that participating in another&rsquo;s flourishing is its own form of flourishing.",
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
              "When you notice a pang of envy &mdash; a drop in your mood at someone else&rsquo;s good news, a comparison that leaves you feeling diminished &mdash; name it honestly before God. Envy thrives in shadow; naming it is the first move toward healing.",
              "Practice the discipline of spoken congratulation: when someone shares good news, respond first with genuine, specific affirmation before any thought of yourself. Train the habit of verbal celebration until the feeling follows the action.",
              "Identify one area where you are most prone to comparison &mdash; career, relationships, appearance, ministry, finances &mdash; and examine what that comparison reveals about where you are finding your worth. Bring that to prayer.",
              "Do a generosity experiment: give something away this week that you might have hoarded out of a scarcity mindset, and notice whether giving loosens the grip of envy on your heart.",
              "Audit your social media consumption: track passive scrolling for one week, noting when envy is triggered. Consider a curated fast from the specific accounts or formats that most reliably provoke comparison.",
              "Memorize and meditate on Galatians 2:20 as a daily identity anchor. Return to it whenever comparison threatens to destabilize your sense of worth.",
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
                name: "Dorothy L. Sayers",
                work: "The Other Six Deadly Sins",
                quote: "Envy is the great leveler: if it cannot level things up, it will level them down. Rather than have anyone happier than itself, it will see us all miserable together.",
                bio: "Dorothy L. Sayers was a British novelist, playwright, and Christian apologist who, alongside C.S. Lewis, was among the most literate popular theologians of the 20th century. Her essay on the seven deadly sins remains one of the sharpest cultural analyses of envy available. Her observation that envy is the great leveler captures its essentially destructive logic: it does not seek good for itself but the elimination of another&rsquo;s advantage.",
              },
              {
                name: "Cornelius Plantinga Jr.",
                work: "Not the Way It&rsquo;s Supposed to Be",
                quote: "The envious person wants what others have, resents the fact that they have it, and may even want to take it away or destroy it. Envy is the sin that cannot even enjoy its own supposed gains because it is too focused on what others possess.",
                bio: "Cornelius Plantinga Jr. is a theologian and former president of Calvin Theological Seminary whose Not the Way It&rsquo;s Supposed to Be offers one of the most theologically rich treatments of sin available to contemporary readers. His analysis of envy locates it within the broader category of shalom-disruption &mdash; the undoing of the right order of things &mdash; and shows how envy is self-defeating because it cannot enjoy even its own goods.",
              },
              {
                name: "Thomas Aquinas",
                work: "Summa Theologica II-II, Q. 36",
                quote: "Envy is sorrow for another&rsquo;s good, inasmuch as it is an obstacle to one&rsquo;s own excellence. It is therefore a sin against charity, for charity rejoices in a neighbor&rsquo;s good.",
                bio: "Thomas Aquinas, the 13th-century Dominican theologian, gives the most precise classical definition of envy: sorrow (tristitia) at another&rsquo;s good, specifically because that good appears to diminish one&rsquo;s own standing. His identification of envy as a sin against charity is decisive: envy is not simply a psychological problem but a failure of love. Where love delights in another&rsquo;s good, envy grieves it.",
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
              { ref: "Genesis 4:6-7", text: "The LORD said to Cain, &ldquo;Why are you angry, and why has your face fallen? If you do well, will you not be accepted? And if you do not do well, sin is crouching at the door. Its desire is contrary to you, but you must rule over it.&rdquo;" },
              { ref: "1 Samuel 18:8-9", text: "And Saul was very angry, and this saying displeased him. He said, &ldquo;They have ascribed to David ten thousands, and to me they have ascribed thousands, and what more can he have but the kingdom?&rdquo; And Saul eyed David from that day on." },
              { ref: "Exodus 20:17", text: "You shall not covet your neighbor&rsquo;s house; you shall not covet your neighbor&rsquo;s wife, or his male servant, or his female servant, or his ox, or his donkey, or anything that is your neighbor&rsquo;s." },
              { ref: "Proverbs 14:30", text: "A tranquil heart gives life to the flesh, but envy makes the bones rot." },
              { ref: "Romans 12:15", text: "Rejoice with those who rejoice, weep with those who weep." },
              { ref: "Galatians 5:26", text: "Let us not become conceited, provoking one another, envying one another." },
              { ref: "James 3:14-16", text: "But if you have bitter jealousy and selfish ambition in your hearts, do not boast and be false to the truth. This is not the wisdom that comes down from above, but is earthly, unspiritual, demonic. For where jealousy and selfish ambition exist, there will be disorder and every vile practice." },
              { ref: "1 Corinthians 13:4", text: "Love is patient and kind; love does not envy or boast; it is not arrogant." },
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
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What triggered the envy? (Person, situation, or comparison)</label>
                  <textarea
                    value={jTrigger}
                    onChange={e => setJTrigger(e.target.value)}
                    placeholder="Name what or who triggered the feeling and what specifically you resented..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What root belief or unmet need does this expose?</label>
                  <textarea
                    value={jRoot}
                    onChange={e => setJRoot(e.target.value)}
                    placeholder="Where are you finding your worth or significance? What does the envy reveal about your identity..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is the gospel antidote? (Identity in Christ, specific act of celebration or generosity)</label>
                  <textarea
                    value={jAntidote}
                    onChange={e => setJAntidote(e.target.value)}
                    placeholder="How does your identity in Christ reframe this? What act of rejoicing or giving might loosen envy&rsquo;s grip..."
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
                {e.root && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Root</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.root}</p></div>}
                {e.antidote && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Antidote</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.antidote}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="6wAVR-XY_K0" title="Envy: The Sin Nobody Talks About" />
            <VideoEmbed videoId="4K7Y_QtLb7c" title="Overcoming Envy with the Gospel &mdash; Identity in Christ" />
            <VideoEmbed videoId="ZizdB0TgAVM" title="The Seven Deadly Sins: Envy &mdash; Dorothy Sayers and Scripture" />
            <VideoEmbed videoId="GVKuS5r7ErE" title="Rejoice with Those Who Rejoice &mdash; Romans 12:15" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
