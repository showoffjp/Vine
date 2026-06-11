"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

type ICEntry = { id: string; date: string; person: string; prayer: string; scripture: string };

export default function IntercessionGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<ICEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_intercession_entries") ?? "[]"); } catch { return []; }
  });
  const [jPerson, setJPerson] = useState("");
  const [jPrayer, setJPrayer] = useState("");
  const [jScripture, setJScripture] = useState("");

  useEffect(() => { localStorage.setItem("vine_intercession_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jPerson.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), person: jPerson, prayer: jPrayer, scripture: jScripture }, ...prev]);
    setJPerson(""); setJPrayer(""); setJScripture("");
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
          <span style={{ background: ACCENT + "22", color: ACCENT, padding: "0.2rem 0.8rem", borderRadius: 20, fontSize: "0.78rem", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>Prayer &amp; Devotion</span>
        </div>
        <h1 style={{ fontSize: "clamp(1.7rem,4vw,2.6rem)", fontWeight: 900, lineHeight: 1.2, margin: "0.75rem 0 0.75rem" }}>
          The Ministry of Intercession
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Intercession is the act of standing between God and another &mdash; pleading their cause, bearing their burden before the throne. Jesus lives to make intercession (Hebrews 7:25). The Spirit intercedes within us (Romans 8:26). We are called into that same priestly stream.
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
                title: "Jesus Our Great Intercessor — He Ever Lives to Intercede (Hebrews 7:25)",
                body: "Consequently, he is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them. Christ&rsquo;s intercession is not a past act but a present, ongoing ministry. The ascended Jesus stands before the Father as our advocate (1 John 2:1), presenting his own blood as the basis for our acceptance. His intercession is not persuading a reluctant God but the Son&rsquo;s continuous presentation of the completed work of the cross. Because he lives, his intercession never fails. This means every believer has an intercessor who never sleeps, never grows weary, and whose prayer is always heard.",
              },
              {
                title: "The Spirit Interceding Within Us (Romans 8:26-27)",
                body: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words. The Holy Spirit not only teaches us to pray but prays within us &mdash; especially at the edges of our capacity, where words fail and need is deepest. The Spirit&rsquo;s intercession is perfectly aligned with the Father&rsquo;s will (v.27). This means the believer&rsquo;s intercession is Trinitarian: we pray through Christ, in the Spirit, to the Father. The weakness we feel in prayer is not a disqualification but an invitation for the Spirit&rsquo;s deeper work.",
              },
              {
                title: "Called to Stand in the Gap (Ezekiel 22:30)",
                body: "And I sought for a man among them who should build up the wall and stand in the breach before me for the land, that I should not destroy it, but I found none. This haunting verse reveals the weight God places on intercession. The image is of a city wall breached by enemies &mdash; and God looking for someone who would stand in that gap. Intercession is not optional spiritual decoration; it is load-bearing. The absence of intercessors has consequences. Moses standing in the breach for Israel (Psalm 106:23) and Abraham pleading for Sodom (Genesis 18:16-33) show what it looks like to step into that space before God.",
              },
              {
                title: "Praying for the Nation and the City (Jeremiah 29:7)",
                body: "But seek the welfare of the city where I have sent you into exile, and pray to the Lord on its behalf, for in its welfare you will find your welfare. Israel in Babylon is commanded to pray for a pagan city &mdash; not because the city deserves it but because it is where God has placed them, and intercession is the posture of faithful exiles. Paul extends this: I urge that supplications, prayers, intercessions, and thanksgivings be made for all people, for kings and all who are in high positions, that we may lead a peaceful and godly life (1 Timothy 2:1-2). The church is called to be a praying community for the wider world.",
              },
              {
                title: "Corporate Intercession and Prayer Chains (Acts 12:5)",
                body: "So Peter was kept in prison, but earnest prayer for him was made to God by the church. The early church&rsquo;s response to Peter&rsquo;s imprisonment was corporate, earnest intercession &mdash; and the prison doors opened. Corporate intercession is not merely adding prayers together; it is the gathered body exercising its priestly vocation as a community. Prayer chains extend this: the network of believers holding one another in continuous prayer across time and geography. There is something about the united cry of many voices that models the unity of the body and the scope of God&rsquo;s care.",
              },
              {
                title: "Building an Intercession Habit &mdash; The Discipline of List and Method",
                body: "E.M. Bounds wrote that prayer is the mightiest force in the world, but it requires form and discipline. Effective intercessors typically keep a prayer list &mdash; specific names, specific needs, specific scriptures to pray. They return to the same people over time, not making one request and moving on. The methods vary: some pray through a list in the morning; some assign days of the week to different circles of concern (family, friends, church, city, nation, world). What matters is specificity and return &mdash; naming the person, bringing them before God, and coming back again and again as Abraham did at Sodom.",
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
              "Begin your intercession time by acknowledging that Jesus is already interceding (Hebrews 7:25) and the Spirit is already at work within you (Romans 8:26). You are joining a prayer already in progress, not initiating one alone.",
              "Keep a written intercession list &mdash; names, needs, and one scripture to pray over each person. Review and update the list weekly. Returning to the same people over time is how intercession deepens from petition into pastoral care.",
              "Practice &ldquo;standing in the gap&rdquo; (Ezekiel 22:30): choose one person or situation of brokenness each week and commit to sustained, specific intercession for 21 days. Track what you observe in yourself and in the situation.",
              "Pray for your city or nation once a week &mdash; not in vague generalities but in specific terms: name leaders by name, name specific social fractures, name the church in the city and its unity. Model the prayer of Nehemiah 1 and Daniel 9.",
              "Join or form a prayer chain &mdash; a simple structure where two or three people commit to pray for each other&rsquo;s requests by name. Structured accountability transforms occasional good intentions into a sustained ministry.",
              "When words fail, practice praying in silence &mdash; holding a person before God without speech, trusting the Spirit to give form to what you cannot articulate (Romans 8:26). This is not emptiness but the deepest form of intercession.",
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
                name: "E.M. Bounds",
                work: "Power Through Prayer",
                quote: "The most important thing in the world is prayer. More things are wrought by prayer than this world dreams of. The church is looking for better methods; God is looking for better men. The man is the method. Prayer is the mightiest force in the world. It is the greatest expression of faith.",
                bio: "E.M. Bounds was a 19th-century Methodist minister who wrote nine books on prayer, most of them published after his death. He rose at 4 a.m. daily to pray for three hours and is one of the most read and quoted writers on intercession in evangelical history. His books Power Through Prayer and The Necessity of Prayer remain standard texts for serious students of intercession.",
              },
              {
                name: "Andrew Murray",
                work: "With Christ in the School of Prayer",
                quote: "Christ is in heaven; He is our High Priest and Intercessor. He asks us, His members on earth, to be His representatives, to take up the work of intercession &mdash; to pray for others as He prays for them. As we yield ourselves to this calling, we discover that intercession is not a burden but a privilege &mdash; a sharing in the very life of the Son before the Father.",
                bio: "Andrew Murray was a 19th-century South African pastor and writer whose books on prayer and the deeper Christian life have nourished the church worldwide. His With Christ in the School of Prayer traces Jesus&rsquo;s own teaching on prayer through the Gospels, making the case that intercession is the central ministry of the believer&rsquo;s life. His writing combines theological precision with pastoral warmth.",
              },
              {
                name: "Rees Howells",
                work: "Rees Howells: Intercessor (Norman Grubb)",
                quote: "The intercessor must be identified with the ones he prays for, as the Lord Jesus was identified with us. He must take their place, bear their burden, feel what they feel &mdash; and then bring that burden into the presence of God. Intercession is not petition at a distance but union in suffering and hope.",
                bio: "Rees Howells was a Welsh intercessor whose life of prayer during World War II became legendary in evangelical circles. Norman Grubb&rsquo;s biography of Howells documents a pattern of deep identification with those prayed for &mdash; Howells believed that genuine intercession required the intercessor to identify fully with the one in need, carrying their burden as Christ carried ours. His model of prevailing prayer has shaped charismatic and evangelical practice widely.",
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
              { ref: "Hebrews 7:25", text: "Consequently, he is able to save to the uttermost those who draw near to God through him, since he always lives to make intercession for them." },
              { ref: "Romans 8:26-27", text: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words. And he who searches hearts knows what is the mind of the Spirit, because the Spirit intercedes for the saints according to the will of God." },
              { ref: "Ezekiel 22:30", text: "And I sought for a man among them who should build up the wall and stand in the breach before me for the land, that I should not destroy it, but I found none." },
              { ref: "1 Timothy 2:1-2", text: "First of all, then, I urge that supplications, prayers, intercessions, and thanksgivings be made for all people, for kings and all who are in high positions, that we may lead a peaceful and quiet life, godly and dignified in every way." },
              { ref: "Jeremiah 29:7", text: "But seek the welfare of the city where I have sent you into exile, and pray to the Lord on its behalf, for in its welfare you will find your welfare." },
              { ref: "Acts 12:5", text: "So Peter was kept in prison, but earnest prayer for him was made to God by the church." },
              { ref: "Psalm 106:23", text: "Therefore he said he would destroy them &mdash; had not Moses, his chosen one, stood in the breach before him, to turn away his wrath from destroying them." },
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
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>Who are you interceding for?</label>
                  <textarea
                    value={jPerson}
                    onChange={e => setJPerson(e.target.value)}
                    placeholder="Name the person, group, or situation specifically..."
                    style={{ width: "100%", minHeight: 60, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What are you bringing before God for them?</label>
                  <textarea
                    value={jPrayer}
                    onChange={e => setJPrayer(e.target.value)}
                    placeholder="Name the specific need, burden, or hope you are carrying for them..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What scripture are you praying over them?</label>
                  <textarea
                    value={jScripture}
                    onChange={e => setJScripture(e.target.value)}
                    placeholder="A verse or passage to anchor your intercession..."
                    style={{ width: "100%", minHeight: 60, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
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
                {e.person && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Person / Situation</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.person}</p></div>}
                {e.prayer && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Prayer</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.prayer}</p></div>}
                {e.scripture && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Scripture</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.scripture}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="TJ4wZB7VgaU" title="What Is Intercession? Standing in the Gap for Others" />
            <VideoEmbed videoId="9uSGDdyJT6A" title="The Ministry of Intercession &mdash; E.M. Bounds and the Power of Prayer" />
            <VideoEmbed videoId="Ufz2vu2m0HI" title="How to Pray for Others: A Practical Guide to Intercession" />
            <VideoEmbed videoId="LR3MlkFMZbU" title="Corporate Prayer and the Power of United Intercession" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
