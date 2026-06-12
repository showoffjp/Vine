"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#E11D48", TEXT = "#F2F2F8", MUTED = "#9898B3";

type PERSEntry = { id: string; date: string; situation: string; scripture: string; response: string };

export default function PersecutionGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PERSEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_persecution_entries") ?? "[]"); } catch { return []; }
  });
  const [jSituation, setJSituation] = useState("");
  const [jScripture, setJScripture] = useState("");
  const [jResponse, setJResponse] = useState("");

  useEffect(() => { localStorage.setItem("vine_persecution_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jSituation.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), situation: jSituation, scripture: jScripture, response: jResponse }, ...prev]);
    setJSituation(""); setJScripture(""); setJResponse("");
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
          The Persecuted Church
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          More Christians live under persecution today than at any point in history. Jesus called the persecuted blessed, and Hebrews commands us to remember those in prison as if bound with them. This guide walks through the theology of suffering for Christ, the reality of the global persecuted church, and how to stand with believers under pressure.
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
                title: "Blessed Are the Persecuted (Matthew 5:10-12)",
                body: "Blessed are those who are persecuted for righteousness&rsquo; sake, for theirs is the kingdom of heaven. Jesus closes the Beatitudes with a double blessing on the persecuted &mdash; the only beatitude he repeats and expands: rejoice and be glad, for your reward is great in heaven, for so they persecuted the prophets who were before you. Persecution is not a sign that something has gone wrong with discipleship but, in a fallen world, a sign that something has gone right. Jesus does not promise his followers exemption from hostility; he promises them his presence within it and a reward beyond it. The persecuted stand in the company of the prophets &mdash; their suffering locates them inside the long story of God&rsquo;s faithful people.",
              },
              {
                title: "The Early Church Under Persecution (Acts 5:40-42)",
                body: "The church was born under pressure. From Stephen&rsquo;s stoning to the imperial persecutions under Nero, Decius, and Diocletian, the first three centuries of Christianity were lived under the threat of arrest, confiscation, and death. Yet Acts records the apostles leaving the council rejoicing that they were counted worthy to suffer dishonor for the name. Persecution scattered the church &mdash; and the scattering spread the gospel (Acts 8:1-4). Tertullian&rsquo;s famous observation held true: the blood of the martyrs proved to be the seed of the church. The lesson is not that suffering is good in itself, but that God&rsquo;s purposes are not defeated by hostility &mdash; they often advance through it.",
              },
              {
                title: "Global Persecution Today — the World Watch List",
                body: "Persecution is not a historical artifact. Open Doors&rsquo; annual World Watch List documents the fifty countries where it is most dangerous to follow Jesus &mdash; an estimated 365 million Christians face high levels of persecution and discrimination. In North Korea, faith in Christ can mean a labor camp for an entire family. In parts of Nigeria, believers face militant violence; in Iran, Afghanistan, and Somalia, conversion can be a capital offense in practice; in India and China, surveillance, social exclusion, and legal pressure squeeze the church. The Western believer who has never read a World Watch List profile has not yet seen the actual shape of the global body of Christ &mdash; a body that is largely poor, non-Western, and under pressure.",
              },
              {
                title: "Soft Persecution and Hard Persecution",
                body: "Researchers distinguish the squeeze from the smash: hard persecution is violence &mdash; imprisonment, beating, martyrdom &mdash; while soft persecution is the slower pressure of social exclusion, family rejection, lost employment, legal harassment, and cultural contempt. Western believers must hold two truths together. First, honesty: losing social standing for one&rsquo;s convictions is not the same as losing one&rsquo;s life, and inflating every cultural disagreement into persecution trivializes the suffering of those facing the smash. Second, sobriety: 2 Timothy 3:12 says all who desire to live a godly life in Christ Jesus will be persecuted &mdash; the pressure to compromise is real in every culture, and the soft squeeze can erode faith as effectively as the hard smash. Discernment names each accurately and resists both.",
              },
              {
                title: "Martyrdom Theology — Faithful Unto Death (Revelation 2:10)",
                body: "Do not fear what you are about to suffer... Be faithful unto death, and I will give you the crown of life. The church has never sought martyrdom &mdash; the early church actually discouraged volunteering for it &mdash; but it has always honored those who, when the choice came, would not deny Christ to save their lives. The word martyr simply means witness: the martyr&rsquo;s death testifies that Jesus is worth more than life itself. Revelation portrays the martyrs under the altar (Rev 6:9-11) and declares that the saints conquered the accuser by the blood of the Lamb and by the word of their testimony, for they loved not their lives even unto death (Rev 12:11). Martyrdom theology is not morbid; it is the logical end of a faith that confesses Jesus, not Caesar, as Lord.",
              },
              {
                title: "Standing With the Persecuted (Hebrews 13:3)",
                body: "Remember those who are in prison, as though in prison with them, and those who are mistreated, since you also are in the body. Hebrews does not ask for distant pity but for identification &mdash; as though in prison with them. Paul&rsquo;s body theology makes this concrete: if one member suffers, all suffer together (1 Cor 12:26). The free church and the persecuted church are one body, which means the suffering of believers in North Korea or Nigeria is not someone else&rsquo;s problem but our own. Standing with them takes the forms of informed intercession, material support, advocacy with governments, amplifying their voices &mdash; and letting their costly faith examine the comfort of our own.",
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
              "Pray through the Open Doors World Watch List: choose one country per week, learn the specific shape of persecution there, and intercede by name for believers, pastors, and persecutors alike.",
              "Practice Hebrews 13:3 imaginatively: when you pray for imprisoned believers, pray <em>as though in prison with them</em> &mdash; picture the cell, the family outside, the interrogation &mdash; so that intercession becomes identification rather than abstraction.",
              "Read one account of a persecuted believer this month &mdash; Richard Wurmbrand&rsquo;s Tormented for Christ, a Voice of the Martyrs report, or a World Watch List country profile &mdash; and let it recalibrate what you call hardship.",
              "Support the persecuted church materially: organizations like Open Doors and The Voice of the Martyrs deliver Bibles, trauma care, legal aid, and livelihood support to believers under pressure.",
              "Examine your own discipleship for quiet compromise: where has the soft squeeze of social cost &mdash; at work, in family, online &mdash; led you to hide or trim your confession of Christ? Name it, and ask for the boldness of Acts 4:29.",
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
                name: "Richard Wurmbrand",
                work: "Tortured for Christ",
                quote: "It was strictly forbidden to preach to other prisoners. It was understood that whoever was caught doing this received a severe beating. A number of us decided to pay the price for the privilege of preaching, so we accepted their terms. It was a deal: we preached and they beat us. We were happy preaching; they were happy beating us &mdash; so everyone was happy.",
                bio: "Richard Wurmbrand was a Romanian Lutheran pastor who spent fourteen years in communist prisons, three of them in solitary confinement, for his ministry. After his release he founded The Voice of the Martyrs to serve persecuted Christians worldwide. His testimony before the U.S. Senate &mdash; removing his shirt to show the scars of torture &mdash; and his book Tortured for Christ awakened the Western church to the reality of the persecuted church behind the Iron Curtain.",
              },
              {
                name: "Dietrich Bonhoeffer",
                work: "The Cost of Discipleship",
                quote: "Suffering, then, is the badge of true discipleship. The disciple is not above his master... Discipleship means allegiance to the suffering Christ, and it is therefore not at all surprising that Christians should be called upon to suffer. In fact it is a joy and a token of his grace.",
                bio: "Dietrich Bonhoeffer was a German pastor and theologian who resisted the Nazi regime and its co-opted state church, helped lead the Confessing Church, and was executed at Floss&euml;nburg concentration camp in April 1945, weeks before liberation. His life and death gave his theology of costly grace its terrible authority: he wrote that when Christ calls a man, he bids him come and die &mdash; and then he did.",
              },
              {
                name: "Tertullian",
                work: "Apology (c. 197 AD)",
                quote: "Kill us, torture us, condemn us, grind us to dust... The oftener we are mown down by you, the more in number we grow; the blood of Christians is seed.",
                bio: "Tertullian of Carthage was an early church father writing in the midst of Roman persecution. His Apology, addressed to the empire&rsquo;s magistrates, defended Christians against slander and argued that persecution was not merely unjust but futile &mdash; the church grew precisely where it bled. His phrase, usually rendered the blood of the martyrs is the seed of the church, became the classic summary of how God turns hostility into harvest.",
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
              { ref: "Matt 5:10-12", text: "Blessed are those who are persecuted for righteousness&rsquo; sake, for theirs is the kingdom of heaven. Blessed are you when others revile you and persecute you and utter all kinds of evil against you falsely on my account. Rejoice and be glad, for your reward is great in heaven, for so they persecuted the prophets who were before you." },
              { ref: "Heb 13:3", text: "Remember those who are in prison, as though in prison with them, and those who are mistreated, since you also are in the body." },
              { ref: "John 15:18-20", text: "If the world hates you, know that it has hated me before it hated you... If they persecuted me, they will also persecute you. If they kept my word, they will also keep yours." },
              { ref: "2 Tim 3:12", text: "Indeed, all who desire to live a godly life in Christ Jesus will be persecuted." },
              { ref: "Acts 5:40-42", text: "And when they had called in the apostles, they beat them and charged them not to speak in the name of Jesus, and let them go. Then they left the presence of the council, rejoicing that they were counted worthy to suffer dishonor for the name." },
              { ref: "1 Pet 4:12-14", text: "Beloved, do not be surprised at the fiery trial when it comes upon you to test you, as though something strange were happening to you. But rejoice insofar as you share Christ&rsquo;s sufferings... If you are insulted for the name of Christ, you are blessed, because the Spirit of glory and of God rests upon you." },
              { ref: "Rev 2:10", text: "Do not fear what you are about to suffer... Be faithful unto death, and I will give you the crown of life." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Intercession Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What situation of persecution are you praying through?</label>
                  <textarea
                    value={jSituation}
                    onChange={e => setJSituation(e.target.value)}
                    placeholder="A country from the World Watch List, a believer you know under pressure, or a cost you are facing yourself..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What scripture anchors this prayer?</label>
                  <textarea
                    value={jScripture}
                    onChange={e => setJScripture(e.target.value)}
                    placeholder="Matthew 5:10-12, Hebrews 13:3, Revelation 2:10..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What response is God calling you to?</label>
                  <textarea
                    value={jResponse}
                    onChange={e => setJResponse(e.target.value)}
                    placeholder="Intercession, giving, advocacy, a bolder confession in your own context..."
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
                {e.situation && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Situation</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.situation}</p></div>}
                {e.scripture && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Scripture</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.scripture}</p></div>}
                {e.response && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Response</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.response}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="guvY1-aNtuY" title="The Way of the Exile &mdash; Living Faithfully Under Hostile Powers (BibleProject)" />
            <VideoEmbed videoId="GswSg2ohqmA" title="The Book of Job &mdash; Faith in the Midst of Suffering (BibleProject)" />
            <VideoEmbed videoId="xmFPS0f-kzs" title="Gospel of the Kingdom &mdash; Why the Gospel Confronts Every Empire (BibleProject)" />
            <VideoEmbed videoId="A14THPoc4-4" title="Justice &mdash; God&rsquo;s Heart for the Oppressed (BibleProject)" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
