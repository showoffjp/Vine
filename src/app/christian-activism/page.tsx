"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

type CAEntry = { id: string; date: string; issue: string; biblical_basis: string; action: string };

export default function ChristianActivismPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CAEntry[]>(() => {
    try { const s = localStorage.getItem("vine_christianactivism_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jIssue, setJIssue] = useState("");
  const [jBiblical, setJBiblical] = useState("");
  const [jAction, setJAction] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianactivism_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jIssue.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), issue: jIssue, biblical_basis: jBiblical, action: jAction }, ...prev]);
    setJIssue(""); setJBiblical(""); setJAction("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Faith &amp; Society</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Christian Activism &amp; Social Justice
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          The Gospel has always demanded engagement with the world &mdash; not escape from it. This guide explores how Christians are called to pursue justice, care for the vulnerable, and engage culture without losing their souls or their witness.
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
                title: "Justice as God&rsquo;s Character &mdash; Amos 5:24",
                body: "But let justice roll down like waters, and righteousness like an ever-flowing stream (Amos 5:24). Justice is not a political platform Christians borrowed from secular culture &mdash; it is an attribute of God himself. The Hebrew mishpat (justice) and tsedaqah (righteousness) appear together over 30 times in the Old Testament. The prophets consistently condemned Israel not for lack of worship but for oppression of the poor, the widow, the orphan, and the foreigner (Is 1:10-17). God&rsquo;s own character demands that those who belong to him pursue right relationships, equitable treatment, and structural conditions in which human dignity is honored.",
              },
              {
                title: "The Gospel and Social Action &mdash; Word and Deed",
                body: "The Church has historically debated whether the Gospel is proclaimed (evangelism) or demonstrated (social action) &mdash; a false dichotomy the New Testament never entertains. Jesus preached the kingdom <em>and</em> healed the sick, fed the hungry, and welcomed the outcast. James 2:14-17 is unambiguous: faith without works is dead. The Lausanne Covenant (1974) declared that evangelism and social responsibility are both part of Christian duty, neither reducible to the other. The Gospel addresses the whole person and the whole creation. To preach forgiveness while ignoring injustice is an abstraction; to pursue justice without proclaiming the Gospel is a truncation.",
              },
              {
                title: "Caring for the Poor &mdash; Matthew 25:31-46",
                body: "Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me (Matt 25:40). Jesus&rsquo; identification with the hungry, the stranger, the sick, and the prisoner is one of the most demanding passages in the Gospels. Christian charity is not condescension toward the unfortunate &mdash; it is an encounter with Christ himself in the person of the vulnerable. This has shaped 2,000 years of Christian institutions: hospitals, orphanages, schools for the poor, abolition movements, refugee ministry. The question &ldquo;Who is my neighbor?&rdquo; (Luke 10) always has an uncomfortable answer.",
              },
              {
                title: "Racial Reconciliation and the Body of Christ &mdash; Galatians 3:28",
                body: "There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus (Gal 3:28). The Church is called to embody a unity that the world cannot produce on its own. Racial reconciliation is not primarily a political agenda &mdash; it is a theological claim about the nature of the new humanity created in Christ. The sin of racism (in individual hearts, in structures, in history) is a distortion of the image of God in every person and a fracturing of the body Christ died to unite. The pursuit of racial reconciliation is not optional for the church; it is inherent to the Gospel.",
              },
              {
                title: "Engaging Culture Without Losing the Soul &mdash; Romans 12:2",
                body: "Do not be conformed to this world, but be transformed by the renewal of your mind (Rom 12:2). Christian engagement with politics, culture, and social causes faces a perennial danger: captivity to the spirit of the age. When the church simply mirrors the political alignments of the left or the right, it has lost its prophetic voice. The Christian calling is to be formed by the Gospel &mdash; to inhabit a politics shaped by the kingdom of God, which will always disturb and challenge every human political project. The test is not &ldquo;Which party am I aligned with?&rdquo; but &ldquo;Am I being formed by Christ or by my cultural tribe?&rdquo;",
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
              "Before engaging any social or political issue, do a &ldquo;Bible first&rdquo; audit: What does Scripture directly address? What does it address by principle? What is genuinely underdetermined by Scripture and therefore a matter of prudential judgment? This distinction prevents conflating personal political opinion with biblical mandate.",
              "Identify one specific area of need in your local community &mdash; food insecurity, unhoused neighbors, schools in under-resourced neighborhoods, refugee families &mdash; and commit to a regular, embodied presence. Advocacy and generosity are amplified by proximity; give people not just your money but your time and presence.",
              "Read across the spectrum of Christian social thought &mdash; Reinhold Niebuhr on realism and power, MLK on prophetic witness, Tim Keller on biblical justice, Ron Sider on radical discipleship &mdash; before forming strong opinions. Avoid getting all your Christian political formation from one ideological source.",
              "Practice what Jim Wallis calls &ldquo;prophetic politics&rdquo;: be willing to be &ldquo;consistently pro-life&rdquo; &mdash; opposing abortion <em>and</em> capital punishment <em>and</em> poverty <em>and</em> gun violence <em>and</em> environmental destruction &mdash; because the biblical vision of human dignity is comprehensive. Resist letting any party fully capture your allegiance.",
              "When advocating for justice, guard your tone and posture. The Church has often caused more damage in how it engaged than in what it stood for. Prophetic speech speaks truth to power with courage; it does not traffic in contempt, demonization, or tribal anger. Ask: could an opponent read what I wrote and believe I still loved them?",
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
                name: "Martin Luther King Jr.",
                work: "Letter from Birmingham Jail",
                quote: "Injustice anywhere is a threat to justice everywhere. We are caught in an inescapable network of mutuality, tied in a single garment of destiny. Whatever affects one directly, affects all indirectly.",
                bio: "Martin Luther King Jr. was a Baptist pastor and the most prominent leader of the American civil rights movement. His Letter from Birmingham Jail (1963) is the most theologically sophisticated defense of civil disobedience in the American Christian tradition &mdash; a masterwork of biblical argumentation, natural law reasoning, and prophetic witness. King understood his activism as rooted in the Gospel and the church&rsquo;s calling to embody the kingdom of God in history.",
              },
              {
                name: "Tim Keller",
                work: "Generous Justice",
                quote: "If you are a Christian and you are not doing justice &mdash; not giving generously to the poor, not advocating for the marginalized &mdash; you need to ask whether you have understood the Gospel. The Gospel creates people who do justice, not as a strategy for social change but as an overflow of grace received.",
                bio: "Tim Keller was the founding pastor of Redeemer Presbyterian Church in Manhattan and one of the most influential Christian thinkers of the early 21st century. In <em>Generous Justice</em>, he argues that care for the poor and the pursuit of justice are not optional addenda to the Gospel but are inseparable from it &mdash; grounded in the character of God, the teaching of Jesus, and the logic of grace. He carefully distinguishes biblical justice from ideological platforms while insisting on its urgency.",
              },
              {
                name: "Soong-Chan Rah",
                work: "The Next Evangelicalism",
                quote: "American evangelicalism has been captive to a white cultural captivity that has distorted its theology, its ecclesiology, and its sense of mission. The future of the church belongs to Christians of the Global South and to communities of color who have learned to read the Bible from a position of suffering rather than privilege.",
                bio: "Soong-Chan Rah is a professor at North Park Theological Seminary and a leading voice on racial justice within American Christianity. His work challenges white Western Christianity to hear the corrective witness of the global church and communities of color &mdash; not as a political concession but as a theological necessity. His <em>The Next Evangelicalism</em> and <em>Prophetic Lament</em> are essential reading for Christians engaging racial reconciliation.",
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
              { ref: "Amos 5:24", text: "But let justice roll down like waters, and righteousness like an ever-flowing stream.", insight: "Justice and righteousness are not optional for God&rsquo;s people &mdash; they flow from his own character." },
              { ref: "Micah 6:8", text: "He has told you, O man, what is good; and what does the Lord require of you but to do justice, and to love kindness, and to walk humbly with your God?", insight: "The prophetic summary of the whole law: justice, mercy, and humility &mdash; inseparable from each other." },
              { ref: "Matthew 25:40", text: "&ldquo;Truly, I say to you, as you did it to one of the least of these my brothers, you did it to me.&rdquo;", insight: "Christ identifies himself with the hungry, the stranger, the sick, and the imprisoned &mdash; service to them is service to him." },
              { ref: "Isaiah 1:17", text: "Learn to do good; seek justice, correct oppression; bring justice to the fatherless, plead the widow&rsquo;s cause.", insight: "God rejected Israel&rsquo;s worship because it was disconnected from justice &mdash; the same danger faces every generation of worshippers." },
              { ref: "Galatians 3:28", text: "There is neither Jew nor Greek, there is neither slave nor free, there is no male and female, for you are all one in Christ Jesus.", insight: "The new humanity created in Christ is the most radical social vision in human history." },
              { ref: "Romans 12:2", text: "Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect.", insight: "Christian social engagement must be formed by the renewing of the mind in Christ, not conformity to any political tribe." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 0.5rem" }} dangerouslySetInnerHTML={{ __html: s.text }} />
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.insight }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Engagement Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What issue or cause is on your heart?</label>
                  <textarea
                    value={jIssue}
                    onChange={e => setJIssue(e.target.value)}
                    placeholder="Name the issue &mdash; what injustice, need, or challenge is pressing on you..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is the biblical basis for your engagement?</label>
                  <textarea
                    value={jBiblical}
                    onChange={e => setJBiblical(e.target.value)}
                    placeholder="Which passages, principles, or aspects of God&rsquo;s character ground your concern..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What action are you taking or planning?</label>
                  <textarea
                    value={jAction}
                    onChange={e => setJAction(e.target.value)}
                    placeholder="A concrete step &mdash; giving, volunteering, advocacy, conversation, prayer..."
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
                {e.issue && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Issue</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.issue}</p></div>}
                {e.biblical_basis && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Biblical Basis</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.biblical_basis}</p></div>}
                {e.action && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Action</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.action}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="Xf1B9GwKBB0" title="Christians and Politics &mdash; How Should We Engage?" />
            <VideoEmbed videoId="7lHJLMN7b2A" title="Biblical Social Justice &mdash; What Does the Bible Say?" />
            <VideoEmbed videoId="9eDDzFUXmPE" title="Christians and Culture &mdash; Faithful Engagement in a Secular World" />
            <VideoEmbed videoId="3b5_lG-GKHE" title="Christians Caring for the Poor &mdash; Justice and the Gospel" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
