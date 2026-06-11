"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

type LDEntry = { id: string; date: string; area: string; principle: string; step: string };

export default function ChristianLeadershipPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<LDEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianleadership_entries") ?? "[]"); } catch { return []; }
  });
  const [jArea, setJArea] = useState("");
  const [jPrinciple, setJPrinciple] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianleadership_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jArea.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), area: jArea, principle: jPrinciple, step: jStep }, ...prev]);
    setJArea(""); setJPrinciple(""); setJStep("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Church &amp; Ministry</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          Christian Leadership
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Jesus redefined greatness: the leader is the servant, and the first is last. Christian leadership is not a platform to be seized but a life to be poured out &mdash; shaped by character, empowered by the Spirit, and accountable to the body of Christ.
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
                title: "Servant Leadership &mdash; The Inversion of Greatness (Mark 10:43-45)",
                body: "Whoever would be great among you must be your servant, and whoever would be first among you must be slave of all. For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many. Jesus&rsquo;s model of leadership is not management theory dressed in theological language &mdash; it is a structural inversion of every human instinct about power. The disciples are arguing about who will be greatest (Mark 10:35-41) when Jesus intervenes with the most radical redefinition of leadership in history. Greatness is not positional; it is directional &mdash; it moves toward those below rather than ascending above them. The cross is not an addendum to Jesus&rsquo;s leadership; it is its full expression.",
              },
              {
                title: "Character Before Competence &mdash; The Elder Qualifications (1 Tim 3:1-7)",
                body: "The saying is trustworthy: if anyone aspires to the office of overseer, he desires a noble task. Therefore an overseer must be above reproach... Paul&rsquo;s qualification list for elders is striking in what it emphasizes: nearly every item is a character quality, not a competency. Above reproach, husband of one wife, sober-minded, self-controlled, respectable, hospitable, not a drunkard, not violent, not quarrelsome, not a lover of money, managing his household well &mdash; all of these are descriptions of who a person is, not what a person can do. The single teaching-related competency (able to teach) is embedded within a matrix of character requirements. The church has too often reversed this ratio &mdash; selecting for platform presence and communication skill while neglecting soul health.",
              },
              {
                title: "Spiritual Authority Is Given, Not Taken (John 13:3-5)",
                body: "Jesus, knowing that the Father had given all things into his hands, and that he had come from God and was going back to God, rose from supper. He laid aside his outer garments, and taking a towel, tied it around his waist. Then he poured water into a basin and began to wash the disciples&rsquo; feet. The washing of feet is possible precisely because Jesus is secure in his identity: knowing who he is and where he comes from, he is free to move downward. Spiritual authority that is grasped or performed is always brittle; it requires constant reinforcement and becomes defensive when threatened. Authority that flows from genuine identity in Christ does not need to protect itself &mdash; it can afford to serve, to yield, to absorb accusation without retaliation.",
              },
              {
                title: "Developing Other Leaders &mdash; The Multiplication Mandate (2 Tim 2:2)",
                body: "What you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also. Paul&rsquo;s instruction to Timothy establishes a four-generation discipleship chain: Paul &rarr; Timothy &rarr; faithful men &rarr; others. The Christian leader is not a keeper of ministry but a multiplier of it. The leader who accumulates ministry around himself, who becomes indispensable, who has no apprentices or successors, has misunderstood the calling. Jesus spent three years not building an institution but forming twelve people who would form others. Eugene Peterson&rsquo;s term for this is &ldquo;formation under conditions of community&rdquo; &mdash; leaders are made in the context of sustained relationship, not in training programs.",
              },
              {
                title: "Failure, Restoration, and Leading Again &mdash; Peter&rsquo;s Reinstatement (John 21:15-17)",
                body: "When they had finished breakfast, Jesus said to Simon Peter, &ldquo;Simon, son of John, do you love me more than these?&rdquo; He said to him, &ldquo;Yes, Lord; you know that I love you.&rdquo; He said to him, &ldquo;Feed my lambs.&rdquo; Peter denied Jesus three times; Jesus asks him three times. The structure is deliberate: each &ldquo;do you love me?&rdquo; corresponds to a denial, and each &ldquo;feed my sheep&rdquo; re-commissions the apostle. The Christian tradition has a robust theology of failure-and-restoration that should shape how the church thinks about leaders who have fallen. Restoration is possible; it is neither automatic nor quick; it requires honest confrontation, genuine repentance, sustained accountability, and appropriate time away from public ministry. The church&rsquo;s failure to think carefully here has produced both premature restoration and permanent exclusion &mdash; neither reflects the gospel.",
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
              "Identify the person in your sphere of influence you are most actively developing. If no one comes to mind, you are consuming ministry rather than multiplying it. Begin an intentional apprenticeship &mdash; sharing access, context, responsibility, and honest feedback over a sustained period.",
              "Conduct a regular character audit (not just a skills audit): ask a trusted friend or spouse the questions you most fear asking &mdash; about how you handle conflict, how you respond to criticism, whether your private and public lives match, and whether you are known for listening or only for speaking.",
              "Practice what Jeannine Brown calls &ldquo;power-with&rdquo; rather than &ldquo;power-over&rdquo;: in your next meeting or decision-making moment, identify where you could share power, invite dissent, or defer to someone with less positional authority but greater proximity to the question.",
              "Study the eldership and deacon structures of your local church: understand the theological rationale for plurality of elders, the accountability structures in place, and where the gaps are. Leadership in the church is always plural and accountable &mdash; never solo.",
              "Read the stories of leaders in the tradition whose failure became formative &mdash; Augustine&rsquo;s Confessions, Thomas Cranmer&rsquo;s recantations and death, John Newton&rsquo;s conversion from slave trader. Consider what sustained patterns of accountability might have interrupted their failures earlier and what God did with the wreckage.",
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
                name: "Eugene Peterson",
                work: "The Contemplative Pastor",
                quote: "The pastor&rsquo;s primary responsibility is not to be competent but to be present &mdash; present to God and present to the people God has given to care for. Busyness is the enemy of that presence. The pastor who is too busy to pray is too busy to lead.",
                bio: "Eugene Peterson was a pastor for thirty years at Christ Our King Presbyterian Church in Maryland before becoming a professor and writer. His pastoral theology, gathered across dozens of books, consistently challenged the cultural pressure to measure ministry by size, program, and platform. His translation of the Bible, The Message, and his trilogy on spiritual theology have shaped a generation of pastors toward what he called &ldquo;a long obedience in the same direction.&rdquo;",
              },
              {
                name: "J. Oswald Sanders",
                work: "Spiritual Leadership",
                quote: "The person who is impatient with weakness will be defective in his leadership... A true leader must be willing to accept the burden of people&rsquo;s weaknesses, failures, and sins &mdash; bearing them rather than condemning them, being with them rather than above them.",
                bio: "J. Oswald Sanders served as the General Director of the China Inland Mission (now OMF International) and wrote prolifically on leadership, discipleship, and prayer. His book Spiritual Leadership, first published in 1967, has remained one of the most widely used resources in Christian leadership development. Sanders draws on Scripture, biography, and pastoral experience to argue that spiritual leadership is always a matter of inner life before outer influence.",
              },
              {
                name: "Tish Harrison Warren",
                work: "Liturgy of the Ordinary",
                quote: "We are not shaped primarily by dramatic decisions or intense spiritual experiences, but by the ordinary, repeated patterns of our days. The same is true of leadership &mdash; the small, daily choices to listen, to serve, to tell the truth, accumulate over time into a person who can be trusted with others&rsquo; souls.",
                bio: "Tish Harrison Warren is an Anglican priest and the author of Liturgy of the Ordinary and Prayer in the Night. Her work explores how the shape of daily Christian practice forms the people God uses, and her voice on leadership is grounded not in corporate success narratives but in the rhythms of liturgy, sacrament, and the slow work of faithfulness in ordinary parishes.",
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
              { ref: "Mark 10:43-45", text: "Whoever would be great among you must be your servant, and whoever would be first among you must be slave of all. For even the Son of Man came not to be served but to serve, and to give his life as a ransom for many.", insight: "The definitive text on Christian leadership: greatness is directional, not positional &mdash; it moves downward into service and self-giving." },
              { ref: "1 Timothy 3:1-2", text: "The saying is trustworthy: if anyone aspires to the office of overseer, he desires a noble task. Therefore an overseer must be above reproach, the husband of one wife, sober-minded, self-controlled, respectable, hospitable, able to teach.", insight: "Paul grounds leadership qualification almost entirely in character formation, not skill or giftedness. The church selects for virtue first." },
              { ref: "John 13:14-15", text: "If I then, your Lord and Teacher, have washed your feet, you also ought to wash one another&rsquo;s feet. For I have given you an example, that you also should do just as I have done to you.", insight: "Jesus&rsquo;s foot-washing is not merely symbolic &mdash; it is a commissioning of the disciples into a particular kind of leadership culture." },
              { ref: "2 Timothy 2:2", text: "What you have heard from me in the presence of many witnesses entrust to faithful men, who will be able to teach others also.", insight: "The leadership multiplication mandate: four generations of transmission in one verse. Leaders make leaders who make leaders." },
              { ref: "1 Peter 5:2-3", text: "Shepherd the flock of God that is among you, exercising oversight, not under compulsion, but willingly, as God would have you; not for shameful gain, but eagerly; not domineering over those in your charge, but being examples to the flock.", insight: "Peter identifies three failure modes of leadership: coercion, greed, and domination &mdash; and the corresponding virtues: willingness, eagerness, and exemplary life." },
              { ref: "John 21:15-17", text: "&ldquo;Simon, son of John, do you love me more than these?&rdquo; He said to him, &ldquo;Yes, Lord; you know that I love you.&rdquo; He said to him, &ldquo;Feed my lambs.&rdquo;", insight: "Jesus&rsquo;s three-fold reinstatement of Peter establishes that leadership after failure is possible &mdash; through honest reckoning and re-commissioning, not cheap restoration." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Leadership Reflection Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What area of leadership are you reflecting on?</label>
                  <textarea
                    value={jArea}
                    onChange={e => setJArea(e.target.value)}
                    placeholder="e.g. how I handle conflict, how I develop others, how I use power..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What principle from Scripture or the tradition is shaping you?</label>
                  <textarea
                    value={jPrinciple}
                    onChange={e => setJPrinciple(e.target.value)}
                    placeholder="A passage, a quote, a conviction that is currently forming you..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is the next concrete step you sense God calling you toward?</label>
                  <textarea
                    value={jStep}
                    onChange={e => setJStep(e.target.value)}
                    placeholder="A specific action, conversation, surrender, or practice..."
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
                {e.area && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Area</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.area}</p></div>}
                {e.principle && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Principle</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.principle}</p></div>}
                {e.step && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Next Step</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.step}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="OMfuGfHvxLY" title="Servant Leadership: What Jesus Said About Greatness" />
            <VideoEmbed videoId="BuViMy_wPzM" title="Character Qualifications for Elders and Deacons" />
            <VideoEmbed videoId="4h3IlBkZ8eQ" title="Developing Leaders: The Multiplication Mandate in 2 Timothy" />
            <VideoEmbed videoId="8YlEb8POSo4" title="Failure and Restoration: Peter&rsquo;s Reinstatement and the Gospel of Second Chances" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
