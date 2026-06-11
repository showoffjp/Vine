"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type CRGEntry = { id: string; date: string; fear: string; calling: string; step: string };

export default function ChristianCouragePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CRGEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christiancourage_entries") ?? "[]"); } catch { return []; }
  });
  const [jFear, setJFear] = useState("");
  const [jCalling, setJCalling] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiancourage_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jFear.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), fear: jFear, calling: jCalling, step: jStep }, ...prev]);
    setJFear(""); setJCalling(""); setJStep("");
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
          Christian Courage
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Christian courage is not the absence of fear but the presence of a greater allegiance. From Joshua&rsquo;s commission to the apostles before the Sanhedrin, Scripture grounds boldness not in self-confidence but in the nearness of God. This guide walks through the theology, examples, and practice of courageous faith.
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
                title: "Be Strong and Courageous — Courage Grounded in Presence (Joshua 1:9)",
                body: "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go. Three times in nine verses God commands Joshua to be strong and courageous &mdash; and the ground of the command is never Joshua&rsquo;s competence, his army, or the weakness of his enemies. It is presence: the LORD your God is with you. Biblical courage is not a temperament some people have and others lack; it is a response to a promise. Joshua inherits an impossible task &mdash; succeeding Moses, crossing the Jordan, facing fortified cities &mdash; and the antidote to his fear is not a pep talk but a Person.",
              },
              {
                title: "For Such a Time as This — Esther&rsquo;s Costly Resolve (Esther 4:14-16)",
                body: "Who knows whether you have not come to the kingdom for such a time as this? Esther&rsquo;s courage is deliberate, not impulsive. Approaching the king unsummoned carried a death sentence, and she does not pretend otherwise: If I perish, I perish. Notice the pattern: she hears the need, counts the cost, calls the community to fast with her for three days, and then acts. Her courage is communal (she does not act alone), prayerful (it is preceded by fasting), and providential (she discerns that her position is not an accident but a calling). Christian courage often looks like this &mdash; recognizing that where God has placed you is where God intends to use you, whatever it costs.",
              },
              {
                title: "Daniel in the Lions&rsquo; Den — Faithfulness When Obedience Is Criminalized (Daniel 6:10)",
                body: "When Daniel knew that the document had been signed, he went to his house... and he got down on his knees three times a day and prayed and gave thanks before his God, as he had done previously. Daniel&rsquo;s courage is striking for its ordinariness: he does not stage a protest or seek martyrdom; he simply continues his established practice of prayer when that practice becomes illegal. The phrase as he had done previously is the key &mdash; courage in the crisis was built by faithfulness in the routine. Daniel also models courage without contempt: he serves a pagan government with excellence (Dan 6:4) while refusing to let that government claim what belongs to God alone.",
              },
              {
                title: "The Fear of Man Lays a Snare — Whom Do You Fear? (Proverbs 29:25)",
                body: "The fear of man lays a snare, but whoever trusts in the LORD is safe. Scripture diagnoses cowardice not primarily as a lack of nerve but as a misplaced fear: we fear the disapproval, rejection, or power of people more than we fear God. Jesus makes the comparison explicit: do not fear those who kill the body but cannot kill the soul (Matt 10:28). The fear of God is not terror but rightly-ordered reverence &mdash; and paradoxically it is liberating, because the person who fears God rightly has nothing else left to fear. Most everyday failures of courage &mdash; the silence in the meeting, the laugh at the cruel joke, the hidden conviction &mdash; trace back to the snare of the fear of man.",
              },
              {
                title: "Peter and John Before the Sanhedrin — Boldness from Being with Jesus (Acts 4:13, 19-20)",
                body: "Now when they saw the boldness of Peter and John, and perceived that they were uneducated, common men, they were astonished. And they recognized that they had been with Jesus. Ordered by the highest religious court to stop speaking of Jesus, the apostles answer: Whether it is right in the sight of God to listen to you rather than to God, you must judge, for we cannot but speak of what we have seen and heard. Their boldness (parrhesia &mdash; free, open speech) is explicitly traced not to training or status but to companionship with Jesus and the filling of the Spirit (Acts 4:8, 31). And note what follows: they return to the community and pray not for safety but for more boldness. Courage to speak truth is a gift to be asked for, not a personality trait to be envied.",
              },
              {
                title: "Martyrs, Persecution, and Courage vs. Recklessness",
                body: "The history of the church is carried forward on the courage of the persecuted &mdash; from Stephen (Acts 7) to Polycarp (Eighty-six years I have served him, and he has done me no wrong) to the millions who suffer for Christ today. Tertullian observed that the blood of the martyrs is the seed of the church. Yet Scripture also distinguishes courage from recklessness: Jesus tells his disciples to be wise as serpents and innocent as doves (Matt 10:16), instructs them to flee from one town to the next when persecuted (Matt 10:23), and himself withdraws from danger when his hour has not yet come (John 8:59). Paul escapes Damascus in a basket (Acts 9:25). Courage is the willingness to suffer for faithfulness when faithfulness requires it &mdash; not the seeking of suffering to prove one&rsquo;s faith. The early church actually discouraged volunteering for martyrdom. The test is calling, not adrenaline: moral courage in our culture more often looks like an unfashionable conviction held with gentleness (1 Pet 3:15-16) than a dramatic last stand.",
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
              "Name your fears specifically before God. Vague anxiety cannot be surrendered; named fears can. Write down the actual thing you are afraid of &mdash; the person, the conversation, the loss &mdash; and pray Psalm 56:3 over it: <em>When I am afraid, I put my trust in you.</em>",
              "Build courage in the routine before you need it in the crisis. Like Daniel, establish fixed habits of prayer and conviction now &mdash; the person who has prayed three times a day for years does not deliberate when prayer becomes costly.",
              "Practice small acts of truth-telling. Courage is a muscle: speak the gracious, unfashionable conviction in the low-stakes meeting; defend the absent colleague; say <em>I was wrong</em> when you were. Faithfulness in little prepares for faithfulness in much (Luke 16:10).",
              "Do not act alone. Before her act of courage, Esther asked the whole community to fast with her for three days. Tell a trusted friend about the hard obedience in front of you and ask them to pray &mdash; courage is communal before it is individual.",
              "Distinguish calling from adrenaline. Before a risky stand, ask: is this faithfulness requiring suffering, or am I seeking conflict to prove something? Pray for the wisdom of Matthew 10:16 &mdash; wise as serpents, innocent as doves &mdash; and seek counsel when unsure.",
              "Pray for boldness, not just safety. Follow the pattern of Acts 4:29 &mdash; when the early church was threatened, they asked God to <em>grant your servants to continue to speak your word with all boldness.</em> Make that a regular petition.",
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
                name: "C.S. Lewis",
                work: "The Screwtape Letters",
                quote: "Courage is not simply one of the virtues, but the form of every virtue at the testing point, which means at the point of highest reality. A chastity or honesty or mercy which yields to danger will be chaste or honest or merciful only on conditions. Pilate was merciful till it became risky.",
                bio: "C.S. Lewis was an Oxford and Cambridge professor and one of the most widely-read Christian writers of the twentieth century. This observation &mdash; placed, with typical irony, in the mouth of the demon Screwtape &mdash; is among the most quoted definitions of courage ever written. Every other virtue depends on courage the moment it costs something; without it, our virtues are merely untested preferences.",
              },
              {
                name: "Dietrich Bonhoeffer",
                work: "Letters and Papers from Prison",
                quote: "Civil courage can grow only out of the free responsibility of free men... It depends on a God who demands responsible action in a bold venture of faith, and who promises forgiveness and consolation to the man who becomes a sinner in that venture.",
                bio: "Dietrich Bonhoeffer was a German pastor and theologian executed by the Nazis in 1945 for his resistance to Hitler. He had safe refuge in America in 1939 and chose to return to Germany, writing that he would have no right to participate in the restoration of Christian life after the war unless he shared the trials of his people. His life and death remain the modern church&rsquo;s most searching case study in moral courage.",
              },
              {
                name: "Joni Eareckson Tada",
                work: "When God Weeps",
                quote: "God, like a father, doesn&rsquo;t just give advice. He gives himself. He becomes the husband to the grieving widow (Isaiah 54:5). He becomes the comforter to the barren woman (Isaiah 54:1)... This is what you do when someone you love is in anguish; you respond to the plea of their heart by giving them your heart.",
                bio: "Joni Eareckson Tada has lived as a quadriplegic since a diving accident at age seventeen, and for over five decades has modeled a quieter form of courage: daily endurance sustained by the presence of God. Her writing relocates courage from the battlefield to the hospital room, showing that the bravest faith is often the faith that gets up again tomorrow morning.",
              },
              {
                name: "John Chrysostom",
                work: "Homily Before His Exile",
                quote: "The waves have risen and the surging sea is dangerous, but we do not fear drowning, for we stand upon the rock. Let the sea surge! It cannot break the rock. What am I to fear? Death? Life to me means Christ, and death is gain. Exile? The earth and its fullness belong to the Lord.",
                bio: "John Chrysostom, the golden-mouthed preacher of fourth-century Constantinople, was exiled twice for confronting the corruption of the imperial court. This homily, preached as soldiers came to remove him, works systematically through every threat &mdash; death, exile, confiscation &mdash; and shows each one disarmed by Scripture. It remains a master class in the logic of Christian fearlessness.",
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
              { ref: "Joshua 1:9", text: "Have I not commanded you? Be strong and courageous. Do not be frightened, and do not be dismayed, for the LORD your God is with you wherever you go." },
              { ref: "Esther 4:14-16", text: "And who knows whether you have not come to the kingdom for such a time as this?... Go, gather all the Jews... and hold a fast on my behalf... Then I will go to the king, though it is against the law, and if I perish, I perish." },
              { ref: "Daniel 6:10", text: "When Daniel knew that the document had been signed, he went to his house where he had windows in his upper chamber open toward Jerusalem. He got down on his knees three times a day and prayed and gave thanks before his God, as he had done previously." },
              { ref: "Proverbs 29:25", text: "The fear of man lays a snare, but whoever trusts in the LORD is safe." },
              { ref: "Acts 4:19-20", text: "But Peter and John answered them, &ldquo;Whether it is right in the sight of God to listen to you rather than to God, you must judge, for we cannot but speak of what we have seen and heard.&rdquo;" },
              { ref: "Matthew 10:28", text: "And do not fear those who kill the body but cannot kill the soul. Rather fear him who can destroy both soul and body in hell." },
              { ref: "Psalm 27:1", text: "The LORD is my light and my salvation; whom shall I fear? The LORD is the stronghold of my life; of whom shall I be afraid?" },
              { ref: "2 Timothy 1:7", text: "For God gave us a spirit not of fear but of power and love and self-control." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Courage Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What fear are you naming before God?</label>
                  <textarea
                    value={jFear}
                    onChange={e => setJFear(e.target.value)}
                    placeholder="Name the actual fear specifically — the person, the conversation, the loss..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is God calling you to do or say in spite of it?</label>
                  <textarea
                    value={jCalling}
                    onChange={e => setJCalling(e.target.value)}
                    placeholder="Who knows whether you have not come to this place for such a time as this?"
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is one concrete step of obedience you can take this week?</label>
                  <textarea
                    value={jStep}
                    onChange={e => setJStep(e.target.value)}
                    placeholder="Small, specific, and soon — courage grows by faithful steps, not grand intentions..."
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
                {e.fear && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Fear</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.fear}</p></div>}
                {e.calling && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Calling</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.calling}</p></div>}
                {e.step && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Step</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.step}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="JqOqJlFF_eU" title="Overview: Joshua — Be Strong and Courageous" />
            <VideoEmbed videoId="JydNSlufRIs" title="Overview: Esther — For Such a Time as This" />
            <VideoEmbed videoId="9cSC9uobtPM" title="Overview: Daniel — Faithfulness Under Pressure" />
            <VideoEmbed videoId="CGbNw855ksw" title="Overview: Acts 1-12 — The Boldness of the Early Church" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
