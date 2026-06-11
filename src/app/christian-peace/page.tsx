"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3B82F6", TEXT = "#F2F2F8", MUTED = "#9898B3";

type PCEntry = { id: string; date: string; turmoil: string; promise: string; practice: string };

export default function ChristianPeacePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PCEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianpeace_entries") ?? "[]"); } catch { return []; }
  });
  const [jTurmoil, setJTurmoil] = useState("");
  const [jPromise, setJPromise] = useState("");
  const [jPractice, setJPractice] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianpeace_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jTurmoil.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), turmoil: jTurmoil, promise: jPromise, practice: jPractice }, ...prev]);
    setJTurmoil(""); setJPromise(""); setJPractice("");
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
          The Peace of God
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          &ldquo;Peace I leave with you; my peace I give to you. Not as the world gives do I give to you&rdquo; (John 14:27). Biblical peace &mdash; shalom &mdash; is not the absence of trouble but the presence of wholeness. This guide walks through peace with God, the peace of God, and the practice of perfect peace in the middle of the storm.
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
                title: "Not as the World Gives — the Peace Jesus Leaves (John 14:27)",
                body: "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid. Jesus speaks these words on the night before his crucifixion &mdash; not from a position of safety but on the threshold of suffering. The peace he gives is therefore not circumstantial calm; it is his own peace, the settled communion he has with the Father, transferred to his disciples. The world gives peace by removing threats; Jesus gives peace in the presence of threats. That is why his peace can hold in a hospital waiting room, a layoff, a sleepless night &mdash; it does not depend on the storm stopping.",
              },
              {
                title: "Shalom — Wholeness, Not Mere Quiet",
                body: "The Hebrew word shalom means far more than the absence of conflict. It speaks of completeness, wholeness, well-being, flourishing &mdash; every part of life rightly ordered and rightly related: to God, to neighbor, to creation, to oneself. When the prophets promise shalom, they envision a world set right; when Jesus is called the Prince of Peace (Isa 9:6), he is the one who brings that comprehensive restoration. This reframes the search for inner peace: Christian peace is not a private emotional state achieved by technique but participation in God&rsquo;s great work of making all things whole. Inner tranquility is a fruit of shalom, not its definition.",
              },
              {
                title: "Peace with God and the Peace of God (Romans 5:1; Philippians 4:7)",
                body: "Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ (Rom 5:1). This is the foundation: an objective, accomplished reconciliation &mdash; the war between the sinner and God is over, ended at the cross. Distinct from this is the peace of God, which surpasses all understanding and guards your hearts and minds in Christ Jesus (Phil 4:7) &mdash; the subjective, experienced tranquility that flows from the objective fact. The order matters. Many chase the feeling of peace while ignoring its foundation. The peace of God grows in those who first rest in their peace with God; experience is built on accomplishment, not the other way around.",
              },
              {
                title: "Peace in the Storm — &ldquo;Peace! Be Still!&rdquo; (Mark 4:35-41)",
                body: "And he awoke and rebuked the wind and said to the sea, Peace! Be still! And the wind ceased, and there was a great calm. The disciples panic in a storm while Jesus sleeps on a cushion &mdash; the picture itself is the sermon. His question afterward is searching: Why are you so afraid? Have you still no faith? The storm was real; the danger was real; but the presence of Christ in the boat changed what the storm could ultimately do. The narrative teaches both Christ&rsquo;s authority over chaos and the shape of discipleship in chaos: peace in the Christian life comes not from the guarantee of calm seas but from the certainty of who is in the boat.",
              },
              {
                title: "Perfect Peace and Peacemaking (Isaiah 26:3; Matthew 5:9)",
                body: "You keep him in perfect peace whose mind is stayed on you, because he trusts in you (Isa 26:3). The Hebrew reads literally shalom shalom &mdash; peace, peace &mdash; doubled for emphasis, and it is conditioned on a stayed mind: attention fixed and held on God. Peace, in other words, has a discipline to it; the mind drifts toward anxiety unless deliberately anchored. And received peace becomes active peace: Blessed are the peacemakers, for they shall be called sons of God (Matt 5:9). Peacemaking is not conflict-avoidance &mdash; that is peacekeeping at best, appeasement at worst &mdash; but the costly work of reconciliation, truth-telling, and repair. Those who have received shalom are sent to make it.",
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
              "Practice the Philippians 4:6-7 exchange: when anxiety surfaces, do not let it circle &mdash; convert it immediately into specific prayer with thanksgiving, naming the worry to God and recalling one past faithfulness, and let the guarded heart be the outcome rather than the prerequisite.",
              "Memorize Isaiah 26:3 and use it as an anchor text: when your mind begins to spiral, deliberately <em>stay</em> it &mdash; return your attention to the character of God (his sovereignty, his nearness, his promises) rather than to the scenario you are rehearsing.",
              "Begin one day this week with ten minutes of stillness before any screen: sit quietly, breathe slowly, and pray the words of Psalm 46:10 &mdash; <em>Be still, and know that I am God</em> &mdash; letting the silence itself be an act of trust.",
              "Distinguish peacekeeping from peacemaking in one current relationship: identify a conflict you have been avoiding, and take one concrete step toward honest, gentle repair &mdash; a conversation, an apology, a question &mdash; rather than mere distance.",
              "Read Mark 4:35-41 slowly and place yourself in the boat: name the storm you are currently in, notice where you assume Christ is absent or asleep, and answer his question &mdash; <em>Why are you so afraid?</em> &mdash; honestly in prayer.",
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
                name: "Augustine of Hippo",
                work: "Confessions",
                quote: "You have made us for yourself, O Lord, and our heart is restless until it rests in you.",
                bio: "Augustine (354&ndash;430) was bishop of Hippo in North Africa and the most influential theologian of the Western church. The opening lines of his Confessions diagnose the human condition with lasting precision: restlessness is not a circumstance problem but a relationship problem. Every search for peace apart from God &mdash; pleasure, achievement, philosophy, all of which Augustine tried &mdash; ends in the same restlessness, because the heart was made for a home it has not yet reached.",
              },
              {
                name: "Corrie ten Boom",
                work: "The Hiding Place",
                quote: "Look around you and be distressed. Look inside you and be depressed. Look at Jesus and be at rest.",
                bio: "Corrie ten Boom was a Dutch watchmaker who hid Jews from the Nazis and survived the Ravensbr&uuml;ck concentration camp, where her sister Betsie died. Her counsel on peace carries unusual authority because it was forged in one of history&rsquo;s darkest places. Her testimony &mdash; that there is no pit so deep that God&rsquo;s love is not deeper still &mdash; demonstrates that the peace of Christ is not a fair-weather comfort but holds at the extremity of human suffering.",
              },
              {
                name: "Charles H. Spurgeon",
                work: "Morning and Evening",
                quote: "It is the lack of resting in the finished work of Christ that keeps believers in turmoil. He who leans wholly upon Jesus has a peace which the world can neither give nor take away.",
                bio: "Charles Spurgeon was a 19th-century London pastor often called the Prince of Preachers, who himself battled recurring depression throughout his ministry. His honesty about his own dark seasons makes his counsel on peace pastoral rather than theoretical: he consistently directed anxious believers away from introspection and toward the objective, finished work of Christ &mdash; peace grounded not in the strength of one&rsquo;s faith but in the sufficiency of its object.",
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
              { ref: "John 14:27", text: "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid." },
              { ref: "Philippians 4:6-7", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." },
              { ref: "Romans 5:1", text: "Therefore, since we have been justified by faith, we have peace with God through our Lord Jesus Christ." },
              { ref: "Isaiah 26:3", text: "You keep him in perfect peace whose mind is stayed on you, because he trusts in you." },
              { ref: "Mark 4:39-40", text: "And he awoke and rebuked the wind and said to the sea, &ldquo;Peace! Be still!&rdquo; And the wind ceased, and there was a great calm. He said to them, &ldquo;Why are you so afraid? Have you still no faith?&rdquo;" },
              { ref: "Matthew 5:9", text: "Blessed are the peacemakers, for they shall be called sons of God." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Peace Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What turmoil or anxiety are you carrying right now?</label>
                  <textarea
                    value={jTurmoil}
                    onChange={e => setJTurmoil(e.target.value)}
                    placeholder="Name the storm specifically rather than in vague generalities..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What promise of God speaks to this storm?</label>
                  <textarea
                    value={jPromise}
                    onChange={e => setJPromise(e.target.value)}
                    placeholder="John 14:27, Philippians 4:7, Isaiah 26:3, Christ in the boat..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What practice will help you stay your mind on God?</label>
                  <textarea
                    value={jPractice}
                    onChange={e => setJPractice(e.target.value)}
                    placeholder="Prayer with thanksgiving, stillness, memorized Scripture, a step of peacemaking..."
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
                {e.turmoil && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Turmoil</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.turmoil}</p></div>}
                {e.promise && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Promise</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.promise}</p></div>}
                {e.practice && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Practice</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.practice}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="oLYORLZOaZE" title="Shalom / Peace &mdash; The Biblical Meaning of Peace (BibleProject)" />
            <VideoEmbed videoId="dy9nwe9_xzw" title="Oceans (Where Feet May Fail) &mdash; Trusting God in the Storm" />
            <VideoEmbed videoId="izrk-erhDdk" title="Cornerstone &mdash; Christ Our Peace Through the Storm" />
            <VideoEmbed videoId="DXDGE_lRI0E" title="10,000 Reasons &mdash; A Heart at Rest in Every Circumstance" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
