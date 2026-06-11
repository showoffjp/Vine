"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

type SDEntry = { id: string; date: string; discipline: string; obstacle: string; fruit: string };

export default function SpiritualDisciplinesPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SDEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_spiritualdisciplines_entries") ?? "[]"); } catch { return []; }
  });
  const [jDiscipline, setJDiscipline] = useState("");
  const [jObstacle, setJObstacle] = useState("");
  const [jFruit, setJFruit] = useState("");

  useEffect(() => { localStorage.setItem("vine_spiritualdisciplines_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jDiscipline.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), discipline: jDiscipline, obstacle: jObstacle, fruit: jFruit }, ...prev]);
    setJDiscipline(""); setJObstacle(""); setJFruit("");
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
          Spiritual Disciplines
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          The disciplines are not means of earning God&rsquo;s favor &mdash; they are the training ground of the soul, the practiced postures through which we place ourselves before God and allow grace to form us into the likeness of Christ. Dallas Willard called them &ldquo;the path of disciplined grace.&rdquo;
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
                title: "Training, Not Trying &mdash; The Athletic Metaphor (1 Tim 4:7-8)",
                body: "Train yourself for godliness; for while bodily training is of some value, godliness is of value in every way. Paul&rsquo;s word &ldquo;train&rdquo; is the Greek gumnaz&omacron; &mdash; the root of our word gymnasium. Godliness is something you train into, not simply try harder for. Dallas Willard makes the crucial distinction: the problem with the sermon on the mount is not that it is too hard to try &mdash; it is that you cannot try to do it. You cannot simply try to love your enemy; you must train to be the kind of person who can. The disciplines are the training regimen that reshapes the deepest habits of soul: the automatic responses, the unexamined reflexes, the patterns of desire that operate beneath conscious decision.",
              },
              {
                title: "Disciplines of Abstinence and Engagement &mdash; Willard&rsquo;s Framework",
                body: "Dallas Willard organizes the disciplines into two categories: disciplines of abstinence (solitude, silence, fasting, frugality, chastity, secrecy, sacrifice) and disciplines of engagement (study, worship, celebration, service, prayer, fellowship, confession, submission). The disciplines of abstinence work primarily by loosening the grip of the things that have come to control us; the disciplines of engagement build up capacities and habits that God can work through. Neither category is spiritually superior &mdash; both are necessary, and the particular disciplines a person needs depend on the particular distortions their soul has accumulated. The goal of all of them is not discipline for its own sake but freedom &mdash; the deep freedom of the person fully alive in Christ.",
              },
              {
                title: "Solitude and Silence &mdash; The School of the Inner Life (Luke 5:16)",
                body: "But he would withdraw to desolate places and pray. Jesus&rsquo;s practice of withdrawal is not incidental to his ministry &mdash; it is its source. The Gospels record Jesus going away to pray at nearly every critical juncture: before choosing the twelve (Luke 6:12), after feeding the five thousand (Matt 14:23), in Gethsemane (Luke 22:39-46). Solitude is not mere physical aloneness; it is the deliberate interruption of the social self &mdash; the self that performs, justifies, explains, and competes. In solitude we discover who we are when we are not being seen. Thomas Merton writes that solitude is not the absence of people but the presence of God, and that presence is transforming in ways that community alone cannot accomplish.",
              },
              {
                title: "Fasting &mdash; Training Desire Toward God (Matt 6:16-18)",
                body: "And when you fast, do not look gloomy like the hypocrites... But when you fast, anoint your head and wash your face, that your fasting may not be seen by others but by your Father who is in secret. Jesus does not say if you fast but when you fast &mdash; fasting is assumed as part of the disciple&rsquo;s regular practice. Fasting is primarily a training of desire: when hunger arises and we redirect that hunger toward God in prayer, we are practicing &mdash; in a physical, embodied way &mdash; the deeper truth that we do not live by bread alone. Over time, fasting reshapes the appetitive self, creating a person whose hungers have been reordered toward the kingdom. Richard Foster calls it &ldquo;the body saying what the soul means.&rdquo;",
              },
              {
                title: "Confession and Celebration &mdash; The Neglected Poles of Formation",
                body: "Therefore, confess your sins to one another and pray for one another, that you may be healed (James 5:16). Confession and celebration are both disciplines, and both are frequently neglected in Protestant spirituality. Confession &mdash; the deliberate, verbal acknowledgment of sin to another person &mdash; is different from confession to God alone: it breaks the power of shame, makes sin visible and named, and invites the community into accountability. Celebration is equally important: the deliberate, practiced cultivation of joy and gratitude as a response to God&rsquo;s goodness. Willard argues that the joyless Christian is not spiritually mature but spiritually malnourished &mdash; celebration is not optional decoration on the Christian life but a core spiritual discipline that counters anxiety, ingratitude, and the subtle heresy that seriousness is holiness.",
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
              "Begin with a single discipline rather than an overhaul of your entire rhythm. Willard recommends starting with solitude: take one hour per week to sit alone in silence with no agenda other than being present to God. Notice what arises &mdash; boredom, anxiety, noise, rest &mdash; and bring it all to God without editing it.",
              "Practice Lectio Divina (divine reading) with one short passage per week: read the passage slowly four times, each time with a different posture &mdash; first for understanding, then for a word that catches you, then for a sense of invitation, finally for a resting in God&rsquo;s presence. Allow the Scripture to read you rather than merely reading it.",
              "Fast one meal per week, and when hunger arises, redirect your attention to prayer &mdash; specifically interceding for someone who weighs on you or pressing into a question you&rsquo;ve been bringing before God. Use the hunger as a trigger for turning.",
              "Practice confession with another person at least monthly. This need not be a formal sacrament; it can be a trusted friend or a small group. Name a specific sin or failure, receive their prayer, and receive the assurance of forgiveness. Break the isolation of private sin.",
              "Build celebration into your weekly rhythm as deliberately as you build in repentance: keep a gratitude list, mark answered prayer with visible commemoration, practice sabbath rest as the discipline of delight. Willard&rsquo;s rule: &ldquo;If you are not having fun following Jesus, something has gone wrong.&rdquo;",
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
                name: "Dallas Willard",
                work: "The Spirit of the Disciplines",
                quote: "Grace is not opposed to effort, it is opposed to earning. Effort is action. Earning is attitude. You can be energetically active and at the same time utterly dependent on God. The disciplines are the effort that creates the space for grace to do its transforming work.",
                bio: "Dallas Willard was a philosopher at the University of Southern California and one of the most important Christian thinkers of the twentieth century on the subject of spiritual formation. His trilogy &mdash; The Spirit of the Disciplines, The Divine Conspiracy, and Renovation of the Heart &mdash; offers the most rigorous contemporary treatment of how disciples are actually formed. His distinction between trying and training has reoriented the way a generation of pastors and teachers think about sanctification.",
              },
              {
                name: "Richard Foster",
                work: "Celebration of Discipline",
                quote: "The Disciplines allow us to place ourselves before God so that he can transform us. They are the means by which we work out our salvation, not because salvation is earned but because it is received in the soil of a life rightly ordered toward God. To neglect them is not humility but negligence.",
                bio: "Richard Foster is a Quaker minister and the founder of Renovar&eacute;, a movement of spiritual renewal that draws on the entire breadth of the Christian tradition. His Celebration of Discipline (1978) introduced millions of evangelicals to the classical disciplines and remains the most accessible entry point into this literature. Foster&rsquo;s categorization of the disciplines into inward, outward, and corporate disciplines offers a useful organizing framework for personal practice.",
              },
              {
                name: "Thomas Merton",
                work: "New Seeds of Contemplation",
                quote: "Contemplation is the highest expression of man&rsquo;s intellectual and spiritual life. It is life itself, fully awake, fully active, fully aware that it is alive. It is spiritual wonder. It is spontaneous awe at the sacredness of life, of being. It is gratitude for life, for awareness, and for being. It is a vivid realization of the fact that life and being in us proceed from an invisible, transcendent, and infinitely abundant Source.",
                bio: "Thomas Merton was a Trappist monk at the Abbey of Gethsemani in Kentucky who became one of the most widely read spiritual writers of the twentieth century. His autobiography The Seven Storey Mountain and his later contemplative writings brought the riches of the monastic tradition into conversation with the wider church. Merton&rsquo;s work on solitude, silence, and contemplative prayer remains foundational for anyone exploring those disciplines.",
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
              { ref: "1 Timothy 4:7-8", text: "Train yourself for godliness; for while bodily training is of some value, godliness is of value in every way, as it holds promise for the present life and also for the life to come.", insight: "The athletic metaphor establishes that godliness is trained into, not merely willed. Paul&rsquo;s word gumnaz&omacron; is the root of our word gymnasium." },
              { ref: "Luke 5:16", text: "But he would withdraw to desolate places and pray.", insight: "Jesus&rsquo;s habitual withdrawal into solitude is the source and sustaining power of his public ministry. The disciplines are not additions to ministry &mdash; they are its root." },
              { ref: "Matthew 6:16-18", text: "And when you fast, do not look gloomy like the hypocrites, for they disfigure their faces that their fasting may be seen by others. Truly, I say to you, they have received their reward. But when you fast, anoint your head and wash your face, that your fasting may not be seen by others but by your Father who is in secret.", insight: "Jesus assumes fasting as part of regular discipleship (&ldquo;when&rdquo;, not &ldquo;if&rdquo;). The discipline is hiddenly practiced before God, not performed for others." },
              { ref: "Psalm 46:10", text: "Be still, and know that I am God. I will be exalted among the nations, I will be exalted in the earth!", insight: "The invitation to stillness is set within the tumult of nations collapsing &mdash; the discipline of silence is not escapism but the ground of trust when everything is shaking." },
              { ref: "James 5:16", text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working.", insight: "Mutual confession is a commanded discipline, not an optional practice. Its fruit is healing &mdash; the word is the same word used for physical healing in James 5:14-15." },
              { ref: "Colossians 3:16", text: "Let the word of Christ dwell in you richly, teaching and admonishing one another in all wisdom, singing psalms and hymns and spiritual songs, with thankfulness in your hearts to God.", insight: "The disciplines of study, fellowship, worship, and celebration converge in Paul&rsquo;s vision of the community formed by the indwelling word of Christ." },
            ].map(s => (
              <div key={s.ref} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem 1.5rem" }}>
                <div style={{ color: ACCENT, fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.95rem" }}>{s.ref}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: "0 0 0.6rem" }} dangerouslySetInnerHTML={{ __html: s.text }} />
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: s.insight }} />
              </div>
            ))}
          </div>
        )}

        {/* JOURNAL */}
        {tab === "journal" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Disciplines Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Which discipline are you currently practicing or exploring?</label>
                  <textarea
                    value={jDiscipline}
                    onChange={e => setJDiscipline(e.target.value)}
                    placeholder="e.g. solitude, fasting, study, confession, prayer, celebration..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What obstacle or resistance are you encountering?</label>
                  <textarea
                    value={jObstacle}
                    onChange={e => setJObstacle(e.target.value)}
                    placeholder="Internal resistance, external circumstances, patterns of avoidance..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What fruit, however small, are you beginning to notice?</label>
                  <textarea
                    value={jFruit}
                    onChange={e => setJFruit(e.target.value)}
                    placeholder="Changes in awareness, desire, response, freedom, or relationship with God..."
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
                {e.discipline && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Discipline</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.discipline}</p></div>}
                {e.obstacle && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Obstacle</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.obstacle}</p></div>}
                {e.fruit && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Fruit</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.fruit}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="dDZIlDHF58Y" title="Dallas Willard on Spiritual Disciplines: Training vs. Trying" />
            <VideoEmbed videoId="MVoKBMuEb7k" title="Solitude and Silence: The School of the Inner Life" />
            <VideoEmbed videoId="qI6f2oFGSuc" title="Fasting: The Body Saying What the Soul Means" />
            <VideoEmbed videoId="9m8EXCsMIwA" title="Celebration as a Spiritual Discipline: The Joy of the Kingdom" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
