"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type SFEntry = { id: string; date: string; pain: string; promise: string; response: string };

export default function ChristianSufferingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<SFEntry[]>(() => {
    try { const s = localStorage.getItem("vine_christiansuffering_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jPain, setJPain] = useState("");
  const [jPromise, setJPromise] = useState("");
  const [jResponse, setJResponse] = useState("");

  useEffect(() => { localStorage.setItem("vine_christiansuffering_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jPain.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), pain: jPain, promise: jPromise, response: jResponse }, ...prev]);
    setJPain(""); setJPromise(""); setJResponse("");
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
          Suffering &amp; the Christian
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Pain is not a sign that God has abandoned you &mdash; it is often the very place where he draws nearest. Scripture does not explain away suffering but meets it with lament, promise, and the cross of Christ who was himself acquainted with grief.
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
                title: "Suffering Produces &mdash; the Progression of Romans 5:3-5",
                body: "We rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame (Romans 5:3-5). Paul does not say suffering is good in itself but that God works through it in a definite direction: endurance &rarr; character &rarr; hope. This is not therapeutic optimism but a claim about divine agency. The word <em>thlipsis</em> (affliction, tribulation) was used for the crushing of grapes or olives; pressing is required to produce oil and wine. Paul rejoices not <em>because</em> of the suffering but <em>in</em> it &mdash; from within it &mdash; because he knows where it is headed. The hope produced is not wishful thinking but a confident expectation grounded in God&rsquo;s love poured into us by the Spirit.",
              },
              {
                title: "The Testing of Faith &mdash; James 1:2-4 and the Teleios",
                body: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing (James 1:2-4). The word <em>teleios</em> translated &ldquo;perfect&rdquo; means mature, complete, having reached its intended end &mdash; not moral flawlessness. James is making a teleological argument: trials are the means by which faith reaches its telos, its full maturity. The &ldquo;joy&rdquo; commanded is not emotional positivity but a considered orientation &mdash; a choice to interpret suffering through the lens of what God is producing rather than what is being lost.",
              },
              {
                title: "The God of All Comfort &mdash; 2 Corinthians 1:3-7",
                body: "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God (2 Corinthians 1:3-4). Paul&rsquo;s theology of suffering here is profoundly relational: suffering is the context in which we receive comfort, and the comfort received becomes the content of the comfort we give. The word <em>paraklesis</em> (comfort, encouragement) appears ten times in five verses &mdash; the God of all comfort is insistently present in affliction.",
              },
              {
                title: "Participation in Christ&rsquo;s Sufferings &mdash; Philippians 3:10",
                body: "That I may know him and the power of his resurrection, and may share his sufferings, becoming like him in his death (Philippians 3:10). Christian suffering is not merely something to be endured but something to be participated in &mdash; sharing in the ongoing sufferings of the body of Christ in the world. The cross is not simply a past event but a pattern into which believers are drawn. To be conformed to Christ&rsquo;s death is a way of knowing him that no other path provides. Paul also writes: I fill up in my flesh what is still lacking in regard to Christ&rsquo;s afflictions, for the sake of his body, that is, the church (Col 1:24). Suffering, for Paul, is not an interruption of the Christian life but part of its deepest texture.",
              },
              {
                title: "Lament as Faithful Prayer &mdash; Permission to Cry Out",
                body: "Approximately one third of the Psalter consists of lament psalms &mdash; honest, often raw complaints addressed directly to God. My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? (Psalm 22:1). How long, Lord? Will you forget me forever? (Psalm 13:1). The lament psalms give the suffering believer a language and a permission: you may bring your full experience &mdash; the anger, the confusion, the sense of abandonment &mdash; directly to God without theological tidying. Walter Brueggemann notes that the church has often sanitized worship by eliminating lament, producing a faith that cannot hold real suffering. Lament is not faithlessness; it is a form of faith that takes God seriously enough to argue with him.",
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
              "When you are suffering, practice lament before you practice explanation &mdash; open a lament psalm (Ps 13, 22, 88) and pray it aloud as your own. Do not rush to resolve it with a &ldquo;but God&hellip;&rdquo; until the lament has been fully spoken.",
              "Keep a suffering and promise journal: on one side, name the pain honestly; on the other, write the specific promise of Scripture you are standing on &mdash; not as denial of the pain but as the counter-testimony of faith.",
              "Find one person who has suffered similarly and ask them to share how God met them in it &mdash; the communion of saints includes those whose faith was forged in suffering, and their testimony is part of your inheritance.",
              "Resist the urge to explain someone else&rsquo;s suffering to them; practice the ministry of presence (sitting with) before the ministry of speech. Job&rsquo;s friends were most helpful in the seven days before they opened their mouths (Job 2:13).",
              "When suffering is chronic &mdash; illness, grief, long seasons of darkness &mdash; establish small daily anchors: a morning prayer, a verse on a card, a brief confession of what you still believe even when you do not feel it. Faith in chronic suffering is sustained by practice more than emotion.",
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
                work: "A Grief Observed",
                quote: "You never know how much you really believe anything until its truth or falsehood becomes a matter of life and death to you. It is easy to say you believe a rope to be strong as long as you are merely using it to cord a box. But suppose you had to hang by that rope over a precipice.",
                bio: "C.S. Lewis wrote A Grief Observed in the raw weeks after his wife Joy Davidman died of cancer &mdash; unguarded entries he initially published under a pseudonym. It is the most honest account of Christian suffering by any major theologian precisely because it is not theological argument but personal record. His early entries read like accusations against God; the later ones show a faith being rebuilt rather than merely recovered. A Grief Observed has probably done more to give grieving Christians permission to be honest than any other modern book.",
              },
              {
                name: "Tim Keller",
                work: "Walking with God Through Pain and Suffering",
                quote: "Christianity&rsquo;s answer to suffering is not an explanation but a person. Jesus Christ entered our world of pain, took it on himself, and transformed it from the inside. He is the only one who has earned the right to say, I understand.",
                bio: "Tim Keller&rsquo;s Walking with God Through Pain and Suffering is one of the most comprehensive treatments of the subject from a Reformed evangelical perspective. Keller surveys the major secular and religious responses to suffering, grounds the Christian response in the cross, and gives both theological and pastoral guidance. Keller himself died of pancreatic cancer in 2023 after a years-long public testimony of grace in suffering &mdash; the book was tested against his own biography.",
              },
              {
                name: "Joni Eareckson Tada",
                work: "A Place of Healing",
                quote: "God permits what he hates to accomplish what he loves. He hates suffering &mdash; it was not in the original creation &mdash; but he permits it because he loves the deep conformity to Christ that suffering can produce in the lives of his people.",
                bio: "Joni Eareckson Tada became a quadriplegic at seventeen in a diving accident and has spent over five decades in a wheelchair. She is the founder of Joni and Friends International Disability Center. Her theology of suffering is not theoretical; it is the lived testimony of someone whose entire adult life has been shaped by profound physical limitation. Her books, including A Place of Healing (written during her battle with cancer), are among the most trustworthy guides available on chronic suffering and God&rsquo;s purposes in disability.",
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
              { ref: "Romans 5:3-4", text: "We rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope.", insight: "Paul reveals a divine trajectory embedded in suffering &mdash; each stage produces the next, culminating in hope that does not shame us." },
              { ref: "James 1:2-4", text: "Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.", insight: "James commands a reframing: trials are the means by which faith reaches its full maturity (<em>teleios</em>). This is not denial but a deeper reading of what God is doing." },
              { ref: "2 Corinthians 1:3-4", text: "Blessed be the God and Father of our Lord Jesus Christ, the Father of mercies and God of all comfort, who comforts us in all our affliction, so that we may be able to comfort those who are in any affliction, with the comfort with which we ourselves are comforted by God.", insight: "The comfort received in suffering becomes the very content of the comfort we can give others. God redeems suffering by making it the source of compassion." },
              { ref: "Psalm 22:1-2", text: "My God, my God, why have you forsaken me? Why are you so far from saving me, so far from my cries of anguish? O my God, I cry by day, but you do not answer, and by night, but I find no rest.", insight: "Jesus quoted this psalm from the cross. Lament is not lack of faith &mdash; it is faith crying out in the dark, addressed to the God who is still &ldquo;my God.&rdquo;" },
              { ref: "Isaiah 53:3-4", text: "He was despised and rejected by men, a man of sorrows and acquainted with grief; and as one from whom men hide their faces he was despised, and we esteemed him not. Surely he has borne our griefs and carried our sorrows.", insight: "The Servant&rsquo;s description is the foundation of Christian suffering: we do not suffer alone but with One who is acquainted with grief and who has borne our sorrows." },
              { ref: "Revelation 21:4", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away.", insight: "The eschatological horizon of all Christian suffering: not endless pain but its final end. Present suffering is held within the arc of a story that ends with God&rsquo;s own tenderness drying every tear." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Suffering &amp; Promise Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What pain or suffering are you carrying right now?</label>
                  <textarea
                    value={jPain}
                    onChange={e => setJPain(e.target.value)}
                    placeholder="Name it honestly — grief, illness, loss, confusion, abandonment..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What promise of God are you holding onto?</label>
                  <textarea
                    value={jPromise}
                    onChange={e => setJPromise(e.target.value)}
                    placeholder="A verse, a name of God, a truth you are anchoring to even when you cannot feel it..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>How are you responding to God in this season?</label>
                  <textarea
                    value={jResponse}
                    onChange={e => setJResponse(e.target.value)}
                    placeholder="Lament, trust, anger, waiting, surrender — what is your honest response?"
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
                {e.pain && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Pain</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.pain}</p></div>}
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
            <VideoEmbed videoId="rtkS_8VWfB0" title="The Gift of Suffering — Tim Keller" />
            <VideoEmbed videoId="ej_6dVdJSIU" title="Suffering and the Sovereignty of God — Ligonier Ministries" />
            <VideoEmbed videoId="4Eg_di-O8nM" title="Don't Waste Your Cancer — John Piper" />
            <VideoEmbed videoId="gV9JugO_5Mk" title="When the Darkness Doesn't Lift — The Gospel Coalition" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
