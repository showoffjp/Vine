"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type PATEntry = { id: string; date: string; trial: string; promise: string; response: string };

export default function ChristianPatiencePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PATEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianpatience_entries") ?? "[]"); } catch { return []; }
  });
  const [jTrial, setJTrial] = useState("");
  const [jPromise, setJPromise] = useState("");
  const [jResponse, setJResponse] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianpatience_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jTrial.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), trial: jTrial, promise: jPromise, response: jResponse }, ...prev]);
    setJTrial(""); setJPromise(""); setJResponse("");
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
          Patience: A Christian Virtue
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Patience is not passive resignation but active trust &mdash; the fruit of a soul anchored in God&rsquo;s promises while enduring the weight of time and trial. Scripture calls us not merely to tolerate suffering but to find in it the workshop of character, hope, and conformity to Christ.
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
                title: "The Testing That Produces Patience &mdash; James 1:2-4",
                body: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing. The Greek word hupomone &mdash; translated steadfastness or patience &mdash; means not passive endurance but active, persistent, purposeful remaining under a load. James does not say to pretend trials are not painful but to orient toward the work they are doing. Trials test faith the way fire tests metal: the heat is real, the pressure is real, and the result &mdash; if we do not flee &mdash; is something refined and strengthened. The joy James commands is not denial of the pain but faith in what the pain is producing.",
              },
              {
                title: "Suffering Produces Hope &mdash; Romans 5:3-5",
                body: "We rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame. Paul traces a chain of causation: suffering is not the end but the beginning of a sequence that culminates in hope &mdash; and not a hope that disappoints, because God&rsquo;s love has been poured into our hearts through the Holy Spirit. The patience required in suffering is not mere stoic gritting of teeth but the active expectation of what God is doing through the process. The foundation is not our strength to endure but God&rsquo;s love already given, the earnest of what is coming.",
              },
              {
                title: "Waiting on God &mdash; Psalm 27:14",
                body: "Wait for the Lord; be strong, and let your heart take courage; wait for the Lord! Biblical waiting is not passivity but posture: to be turned toward God, expectant, trusting that the one who has promised is faithful. The Hebrew qavah &mdash; wait &mdash; carries the connotation of twisting or binding together, as strands of rope, suggesting a kind of active clinging rather than mere standing still. The Psalmist calls us to be strong &mdash; patience requires strength, not weakness. It is the strong person who can sustain the tension of unanswered prayer and unresolved suffering without collapsing into despair or rushing ahead of God. Waiting is a discipline, not a passive default.",
              },
              {
                title: "Patience in Suffering vs. Passivity &mdash; Job&rsquo;s Long-Suffering",
                body: "You have heard of the steadfastness of Job, and you have seen the purpose of the Lord, how the Lord is compassionate and merciful (James 5:11). Job is the biblical archetype of patience in suffering, but his patience is not silence. He argues with God, laments loudly, and refuses to accept false comfort from his friends. The &lsquo;patience of Job&rsquo; as it has come to be understood &mdash; quiet, accepting endurance &mdash; is actually a misreading; Job is fierce, honest, and persistent in his engagement with God. What he does not do is abandon his relationship with God or accept his friends&rsquo; theology that suffering must mean guilt. His patience is relational: he stays in conversation with God even when God seems absent.",
              },
              {
                title: "Long-Suffering as Fruit of the Spirit &mdash; Galatians 5:22",
                body: "The fruit of the Spirit is love, joy, peace, patience (makrothumia)... Makrothumia &mdash; long-suffering &mdash; is specifically patience toward people: the capacity to bear with difficult, provoking, slow, or sinful people without retaliation or revenge. It is one dimension of the single fruit of the Spirit (fruit, not fruits, is singular in Greek), meaning it cannot be isolated from love, joy, and peace but grows together with them. The patience the Spirit produces toward people reflects God&rsquo;s own character: the Lord is merciful and gracious, slow to anger and abounding in steadfast love (Ps 103:8). To grow in patience is to become more like God in this specific way.",
              },
              {
                title: "Thomas &agrave; Kempis on Patience",
                body: "Why dost thou desire a long life if thou art not prepared to spend it well? Alas, long life often increaseth guilt rather than virtue. Would that we had spent a single day in this world well! The Imitation of Christ returns repeatedly to patience as the mark of the truly mature Christian. &Agrave; Kempis connects patience to humility: the person who accepts correction, delay, and suffering without resentment has made real progress in the interior life. He is suspicious of impatience because it reveals our attachment to comfort, speed, and control &mdash; all of which must be surrendered to walk with Christ. Cultivating patience in daily life begins in the small provocations: the slow driver, the delayed answer, the person who talks too long.",
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
              "Identify the trial or delay that is most testing your patience right now. Write it down. Then write the specific promise from Scripture you are choosing to trust while you wait. Patience is faith in practice &mdash; name both the trial and the promise.",
              "Practice the &ldquo;small school of patience&rdquo;: deliberately slow down your responses to frustrating people or situations. When irritated, pause before speaking. The discipline of controlled response in small things trains the character for larger trials.",
              "Pray through Psalm 27 or Psalm 46 slowly, particularly the &ldquo;wait&rdquo; and &ldquo;be still&rdquo; passages. Let the psalm shape your posture before God rather than telling God what you need him to do and when.",
              "Read Job 1-3, 38-42 in one sitting, paying attention to how Job engages God in his suffering. Notice what biblical lament looks like: honest, direct, persistent, but never turning away from God. Practice lament as a form of patience.",
              "Identify one person who provokes your impatience repeatedly. Ask yourself what this relationship is teaching you about your own attachments, expectations, and need for control. Bring that self-knowledge to God and ask for the grace of makrothumia.",
              "Use the Ignatian practice of &ldquo;agere contra&rdquo; &mdash; acting against your impulse &mdash; when impatience rises. When you want to rush, deliberately slow. When you want to control, deliberately release. When you want an answer now, deliberately wait another day.",
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
                name: "Thomas &agrave; Kempis",
                work: "The Imitation of Christ",
                quote: "What doth it profit thee to enter into deep discussion concerning the Holy Trinity, if thou lack humility? Truly it profiteth thee nothing... I had rather feel contrition than be skilful in the definition thereof. Without patience and virtue no knowledge is of any worth.",
                bio: "Thomas &agrave; Kempis (c. 1380&ndash;1471) was a German-Dutch Augustinian friar whose Imitation of Christ became one of the most widely-read devotional works in Christian history. His treatment of patience is inseparable from his emphasis on humility and the interior life. He consistently connects impatience to pride &mdash; the refusal to accept circumstances that God has permitted &mdash; and patience to the deepest conformity with Christ, who endured the cross for the joy set before him.",
              },
              {
                name: "C.S. Lewis",
                work: "The Problem of Pain",
                quote: "God whispers to us in our pleasures, speaks in our conscience, but shouts in our pains: it is His megaphone to rouse a deaf world. No doubt pain as God&rsquo;s megaphone is a terrible instrument; it may lead to final and unrepented rebellion. But it gives the only opportunity the bad man can have for amendment.",
                bio: "C.S. Lewis wrestled personally and intellectually with the problem of suffering, most acutely after his wife Joy died &mdash; the raw diary of that grief became A Grief Observed. In The Problem of Pain he argues theologically that suffering is not evidence against God but one of the instruments by which a good God shapes finite creatures for infinite glory. His framework gives theological grounding to the patience the New Testament calls for: the suffering is real, but so is what God is doing through it.",
              },
              {
                name: "Joni Eareckson Tada",
                work: "A Place of Healing",
                quote: "Suffering is not so much about finding answers as it is about learning to trust the One who holds all the answers. And that takes patience &mdash; not the kind that waits for circumstances to improve but the kind that finds God sufficient even when they do not.",
                bio: "Joni Eareckson Tada became a quadriplegic after a diving accident at seventeen and has spent more than five decades as one of the most trusted voices on Christian suffering and patience. Her witness is not theoretical: she speaks from decades of living in a broken body with unbroken faith. Her writing insists that patience is not a coping mechanism but a form of trust &mdash; the slow discovery that God is enough when everything else has been taken away.",
              },
              {
                name: "Eugene Peterson",
                work: "A Long Obedience in the Same Direction",
                quote: "The Christian life is not a short sprint but a long obedience in the same direction. Patience is not something we add to the journey; it is the shape of the journey itself. To follow Jesus is to discover that the pace is his, not ours.",
                bio: "Eugene Peterson was a pastor and theologian who spent thirty years as a parish minister before translating The Message and writing more than thirty books on the spiritual life. His work consistently challenges the &ldquo;instant&rdquo; culture of modern Christianity with the ancient rhythms of Scripture and formation. A Long Obedience in the Same Direction &mdash; its title drawn from Nietzsche of all places &mdash; is his sustained argument that discipleship is constitutionally patient: slow, cumulative, and resistant to shortcuts.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }} dangerouslySetInnerHTML={{ __html: v.name }} />
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
              { ref: "James 1:2-4", text: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing." },
              { ref: "Romans 5:3-5", text: "Not only that, but we rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame, because God&rsquo;s love has been poured into our hearts through the Holy Spirit who has been given to us." },
              { ref: "Psalm 27:14", text: "Wait for the Lord; be strong, and let your heart take courage; wait for the Lord!" },
              { ref: "James 5:11", text: "Behold, we consider those blessed who remained steadfast. You have heard of the steadfastness of Job, and you have seen the purpose of the Lord, how the Lord is compassionate and merciful." },
              { ref: "Galatians 5:22-23", text: "But the fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control; against such things there is no law." },
              { ref: "Hebrews 12:1", text: "Therefore, since we are surrounded by so great a cloud of witnesses, let us also lay aside every weight, and sin which clings so closely, and let us run with endurance the race that is set before us." },
              { ref: "Lamentations 3:25-26", text: "The Lord is good to those who wait for him, to the soul who seeks him. It is good that one should wait quietly for the salvation of the Lord." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Patience Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What trial or delay is testing your patience right now?</label>
                  <textarea
                    value={jTrial}
                    onChange={e => setJTrial(e.target.value)}
                    placeholder="Describe the situation honestly &mdash; name the weight you are carrying..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What promise from Scripture are you anchoring to while you wait?</label>
                  <textarea
                    value={jPromise}
                    onChange={e => setJPromise(e.target.value)}
                    placeholder="A verse, a truth about God's character, a word you have received..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>How are you choosing to respond in faith rather than react in frustration?</label>
                  <textarea
                    value={jResponse}
                    onChange={e => setJResponse(e.target.value)}
                    placeholder="A concrete step, a prayer posture, a practice you are taking up..."
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
                {e.trial && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Trial</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.trial}</p></div>}
                {e.promise && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Promise</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.promise}</p></div>}
                {e.response && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Response</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.response}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="t9yFU8K2WIA" title="What Is Biblical Patience? Hupomone and Makrothumia Explained" />
            <VideoEmbed videoId="uPN3gWDNSbI" title="Waiting on God: The Discipline of Holy Patience" />
            <VideoEmbed videoId="YFBgQcUiZvo" title="The Patience of Job: Suffering, Lament, and Faith" />
            <VideoEmbed videoId="rEHSuEXdxiI" title="Patience as a Fruit of the Spirit &mdash; Growing in Long-Suffering" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
