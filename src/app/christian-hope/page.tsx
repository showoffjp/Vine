"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

type HPEntry = { id: string; date: string; circumstance: string; promise: string; anchor: string };

export default function ChristianHopePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<HPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_christianhope_entries") ?? "[]"); } catch { return []; }
  });
  const [jCircumstance, setJCircumstance] = useState("");
  const [jPromise, setJPromise] = useState("");
  const [jAnchor, setJAnchor] = useState("");

  useEffect(() => { localStorage.setItem("vine_christianhope_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jCircumstance.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), circumstance: jCircumstance, promise: jPromise, anchor: jAnchor }, ...prev]);
    setJCircumstance(""); setJPromise(""); setJAnchor("");
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
          Living Hope
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Christian hope is not wishful thinking or a sunny disposition &mdash; it is a living hope, born through the resurrection of Jesus Christ from the dead, and a sure and steadfast anchor for the soul. This guide walks through the theology and practice of hoping well in a broken world.
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
                title: "A Living Hope Through the Resurrection (1 Peter 1:3)",
                body: "Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead. Peter writes to suffering exiles, and the first thing he gives them is not advice but doxology. Christian hope is living because its object is alive: it is grounded not in circumstances improving but in an event that has already happened &mdash; the resurrection. Because Jesus has been raised, hope is not a mood to be manufactured but an inheritance that is imperishable, undefiled, and unfading, kept in heaven for you (1 Pet 1:4). Hope of this kind cannot be killed by what kills other hopes, because its anchor point lies outside the reach of decay and death.",
              },
              {
                title: "Hope as Anchor of the Soul (Hebrews 6:19)",
                body: "We have this as a sure and steadfast anchor of the soul, a hope that enters into the inner place behind the curtain, where Jesus has gone as a forerunner on our behalf. The anchor is the classic image of Christian hope: it does not remove the storm, but it holds the ship. Notably, the anchor in Hebrews is not dropped down into the sea but cast up into the heavenly sanctuary, fixed to Christ himself who has entered behind the curtain. Hope is therefore not the absence of turbulence but the presence of a fixed point. The soul that is anchored can be tossed without being lost. The question hope asks is not &ldquo;will the waves stop?&rdquo; but &ldquo;does the anchor hold?&rdquo;",
              },
              {
                title: "Hope Is Not Optimism",
                body: "Optimism is a temperament; hope is a virtue. Optimism calculates probabilities and predicts that things will get better; hope rests on promises and trusts the One who made them, even when every visible probability points the other way. The optimist is vulnerable to refutation by events &mdash; one sufficiently dark season can extinguish optimism entirely. Hope, by contrast, does not depend on a favorable reading of circumstances; it can stand at a graveside and still say &ldquo;I believe in the resurrection of the body.&rdquo; This is why Scripture speaks of hoping against hope (Rom 4:18): Abraham, facing the fact of his own as-good-as-dead body, believed the promise anyway. Christian hope is realism plus resurrection.",
              },
              {
                title: "Eschatological Hope — the Renewal of All Things",
                body: "Christian hope is not finally about escaping the world but about the world&rsquo;s renewal. The biblical story ends not with souls floating away to heaven but with heaven coming down: Behold, the dwelling place of God is with man... Behold, I am making all things new (Rev 21:3-5). Romans 8 says creation itself waits with eager longing, groaning as in childbirth, to be set free from its bondage to corruption. N.T. Wright, in Surprised by Hope, argues that the church has often shrunk its hope to going to heaven when you die, when the New Testament&rsquo;s hope is bodily resurrection and new creation &mdash; life after life after death. This changes the present: if God intends to renew this world, then what is done in the Lord now &mdash; every act of justice, beauty, and love &mdash; is not wasted but will somehow be taken up into the new creation (1 Cor 15:58).",
              },
              {
                title: "Hope Forged in Suffering (Romans 5:3-5)",
                body: "We rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame, because God&rsquo;s love has been poured into our hearts through the Holy Spirit. Paul&rsquo;s chain is startling: hope appears at the end of the sequence, not the beginning &mdash; it is the product of endured suffering, not the absence of it. The hope that has been through the fire is qualitatively different from the hope that has never been tested; it has been proven. And the guarantee that this hope will not disappoint is not a logical argument but an experience: the love of God already poured out by the Spirit. Hope is sustained by a present taste of a future feast.",
              },
              {
                title: "Hope Deferred and the Discipline of Waiting (Proverbs 13:12)",
                body: "Hope deferred makes the heart sick, but a desire fulfilled is a tree of life. Scripture is honest about the cost of waiting: deferred hope genuinely sickens the heart, and the Bible does not shame the one who feels it. The Psalms give voice to this waiting &mdash; How long, O LORD? (Ps 13:1) &mdash; and yet the same tradition insists that those who wait for the LORD shall renew their strength (Isa 40:31). Biblical waiting is not passive resignation but expectant attention, like watchmen waiting for the morning (Ps 130:5-6): the night is real, but the dawn is certain. Advent enshrines this posture in the church calendar &mdash; a whole season of learning to wait in the dark with lamps lit.",
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
              "Anchor each anxiety to a promise: when a specific fear surfaces, write it down and pair it with a specific promise of God (1 Pet 1:3-4, Rom 8:28, Rev 21:4) &mdash; hope grows by attaching real circumstances to real promises, not by vague positivity.",
              "Pray the waiting Psalms (13, 27, 40, 130) when hope is deferred: let the psalmist&rsquo;s &ldquo;how long?&rdquo; give you honest language for the dark, and notice how each psalm turns &mdash; without denying the pain &mdash; toward trust.",
              "Practice resurrection remembrance: each Sunday, deliberately recall that the resurrection is a past event, not a future wish &mdash; your hope rests on something that has already happened, and the empty tomb is the down payment on the renewal of all things.",
              "Do one small act of new creation this week &mdash; mend something broken, beautify something neglected, reconcile something fractured &mdash; as a deliberate sign that your labor in the Lord is not in vain (1 Cor 15:58).",
              "Keep an Advent posture year-round: light a candle during evening prayer as a physical reminder that you are a watchman waiting for a morning that is certain to come (Ps 130:6).",
              "When walking with someone whose hope is sick (Prov 13:12), resist offering optimism (&ldquo;it will probably work out&rdquo;); offer presence and promise instead &mdash; sit in the dark with them and point quietly to the anchor.",
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
                name: "N.T. Wright",
                work: "Surprised by Hope",
                quote: "Hope is what you get when you suddenly realize that a different worldview is possible, a worldview in which the rich, the powerful, and the unscrupulous do not after all have the last word. The same worldview shift that is demanded by the resurrection of Jesus is the shift that will enable us to transform the world.",
                bio: "N.T. Wright is a New Testament scholar and former Bishop of Durham whose Surprised by Hope reframed popular Christian eschatology around bodily resurrection and new creation rather than disembodied heaven. His insistence that Christian hope is for the renewal of this world &mdash; and that present work for justice and beauty therefore matters eternally &mdash; has reshaped how a generation thinks about life after death and life before it.",
              },
              {
                name: "J&uuml;rgen Moltmann",
                work: "Theology of Hope",
                quote: "Faith, wherever it develops into hope, causes not rest but unrest, not patience but impatience. It does not calm the unquiet heart, but is itself this unquiet heart in man. Those who hope in Christ can no longer put up with reality as it is, but begin to suffer under it, to contradict it.",
                bio: "J&uuml;rgen Moltmann was a German theologian whose faith was born as a prisoner of war in World War II, and whose Theology of Hope (1964) placed eschatology at the center rather than the end of Christian theology. For Moltmann, hope is not escapism but the engine of transformation: because God has promised a new creation, hope refuses to make peace with the present order of suffering and injustice.",
              },
              {
                name: "Charles Spurgeon",
                work: "Sermons",
                quote: "The wind of trouble may toss the vessel, but the anchor of hope holds. Our hope is not hung upon such an untwisted thread as &ldquo;I imagine so&rdquo; or &ldquo;It is likely,&rdquo; but the cable, the strong tow of our spiritual hope, is fastened to the immovable rock of God&rsquo;s own promise.",
                bio: "Charles Haddon Spurgeon was a 19th-century Baptist preacher in London who battled severe depression for much of his ministry, which makes his preaching on hope anything but theoretical. Again and again he returned to Hebrews 6:19 &mdash; the anchor within the veil &mdash; insisting that hope rests not on probabilities or feelings but on the unbreakable promise of God, a truth he clung to in his own darkest seasons.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }} dangerouslySetInnerHTML={{ __html: v.name }} />
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
              { ref: "1 Peter 1:3-4", text: "Blessed be the God and Father of our Lord Jesus Christ! According to his great mercy, he has caused us to be born again to a living hope through the resurrection of Jesus Christ from the dead, to an inheritance that is imperishable, undefiled, and unfading, kept in heaven for you." },
              { ref: "Hebrews 6:19", text: "We have this as a sure and steadfast anchor of the soul, a hope that enters into the inner place behind the curtain." },
              { ref: "Romans 5:3-5", text: "We rejoice in our sufferings, knowing that suffering produces endurance, and endurance produces character, and character produces hope, and hope does not put us to shame, because God&rsquo;s love has been poured into our hearts through the Holy Spirit who has been given to us." },
              { ref: "Proverbs 13:12", text: "Hope deferred makes the heart sick, but a desire fulfilled is a tree of life." },
              { ref: "Romans 15:13", text: "May the God of hope fill you with all joy and peace in believing, so that by the power of the Holy Spirit you may abound in hope." },
              { ref: "Lamentations 3:21-23", text: "But this I call to mind, and therefore I have hope: The steadfast love of the LORD never ceases; his mercies never come to an end; they are new every morning; great is your faithfulness." },
              { ref: "Revelation 21:4-5", text: "He will wipe away every tear from their eyes, and death shall be no more, neither shall there be mourning, nor crying, nor pain anymore, for the former things have passed away. And he who was seated on the throne said, &ldquo;Behold, I am making all things new.&rdquo;" },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Hope Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What circumstance is testing your hope right now?</label>
                  <textarea
                    value={jCircumstance}
                    onChange={e => setJCircumstance(e.target.value)}
                    placeholder="Name the storm honestly &mdash; the waiting, the loss, the uncertainty..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What promise of God are you holding against it?</label>
                  <textarea
                    value={jPromise}
                    onChange={e => setJPromise(e.target.value)}
                    placeholder="A specific promise &mdash; 1 Peter 1:3, Romans 8:28, Revelation 21:4..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What is anchoring your soul today?</label>
                  <textarea
                    value={jAnchor}
                    onChange={e => setJAnchor(e.target.value)}
                    placeholder="The fixed point that holds when the waves do not stop (Hebrews 6:19)..."
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
                {e.circumstance && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Circumstance</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.circumstance}</p></div>}
                {e.promise && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Promise</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.promise}</p></div>}
                {e.anchor && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Anchor</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.anchor}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="Zy2AQlK6C5k" title="Heaven and Earth &mdash; The Hope of the World&rsquo;s Renewal" />
            <VideoEmbed videoId="xmFPS0f-kzs" title="The Gospel of the Kingdom &mdash; Why Hope Is Good News" />
            <VideoEmbed videoId="WhP7AZQlzCg" title="1 Peter: Living Hope for Suffering Exiles" />
            <VideoEmbed videoId="rzim37AGcHo" title="N.T. Wright on Surprised by Hope &mdash; Resurrection and New Creation" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
