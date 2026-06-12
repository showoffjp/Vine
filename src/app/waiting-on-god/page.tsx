"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#D97706", TEXT = "#F2F2F8", MUTED = "#9898B3";

type WTGEntry = { id: string; date: string; waiting_for: string; promise: string; posture: string };

export default function WaitingOnGodPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<WTGEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_waitingongod_entries") ?? "[]"); } catch { return []; }
  });
  const [jWaitingFor, setJWaitingFor] = useState("");
  const [jPromise, setJPromise] = useState("");
  const [jPosture, setJPosture] = useState("");

  useEffect(() => { localStorage.setItem("vine_waitingongod_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jWaitingFor.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), waiting_for: jWaitingFor, promise: jPromise, posture: jPosture }, ...prev]);
    setJWaitingFor(""); setJPromise(""); setJPosture("");
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
          Waiting on God
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Most of the life of faith is lived in the meantime &mdash; between promise and fulfillment, between prayer and answer. Scripture does not treat waiting as wasted time but as the very soil where trust grows. This guide walks through the theology and practice of waiting on God: the long stories of Abraham, Joseph, and David, the honest lament of the Psalms, and the hope-shaped patience of Advent.
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
                title: "They That Wait Upon the LORD (Isaiah 40:31)",
                body: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint. Isaiah speaks this to exiles who fear God has forgotten them. The Hebrew qavah (to wait) shares a root with the word for a cord pulled taut &mdash; waiting is hopeful tension, not slack resignation. Notice the order of the promise: soaring, then running, then walking. The deepest strength God gives is not for the dramatic moments but for the long, unglamorous walk of ordinary faithfulness. Waiting on the LORD is not the absence of strength; it is its source.",
              },
              {
                title: "Abraham Waiting for Isaac (Genesis 12-21)",
                body: "Twenty-five years passed between God&rsquo;s promise of a son and Isaac&rsquo;s birth &mdash; a quarter century in which Abraham aged past all biological hope. The story is honest about the cost: Abraham laughed, Sarah laughed, and the Hagar episode shows what happens when we try to engineer God&rsquo;s promise on our own timetable &mdash; shortcuts in waiting create their own wreckage. Yet Romans 4:20-21 says Abraham grew strong in his faith as he gave glory to God, fully convinced that God was able to do what he had promised. The waiting did not merely delay the promise; it formed the man who could receive it.",
              },
              {
                title: "Joseph in Prison, David in the Wilderness",
                body: "Joseph received his dreams at seventeen and stood before Pharaoh at thirty &mdash; thirteen years of slavery and prison in between, including the bitter detail that the cupbearer forgot him for two more years (Gen 40:23). David was anointed king as a shepherd boy and then spent years running from Saul in the wilderness, twice refusing to seize the throne by killing the king when he had the chance (1 Sam 24, 26). Both stories teach the same grammar of waiting: the years between anointing and arrival are not God&rsquo;s absence but God&rsquo;s workshop. Psalm 105:19 says of Joseph, until what he had said came to pass, the word of the LORD tested him. The waiting room is where kings and deliverers are actually made.",
              },
              {
                title: "How Long, O LORD? When God Seems Silent (Psalm 13)",
                body: "How long, O LORD? Will you forget me forever? How long will you hide your face from me? Psalm 13 asks how long four times in two verses &mdash; and Scripture canonizes the question. Biblical waiting is not stoic suppression; it is permitted, even commanded, to bring the ache into God&rsquo;s presence with full honesty. The psalm&rsquo;s movement is instructive: complaint (vv. 1-2), petition (vv. 3-4), and then trust (vv. 5-6) &mdash; but I have trusted in your steadfast love. The turn comes without any change in circumstances. Lament is not the opposite of faith; it is faith&rsquo;s voice in the dark, the refusal to stop talking to the God who seems silent.",
              },
              {
                title: "Active Waiting, Not Passive Waiting",
                body: "Biblical waiting is not a bus-stop passivity that suspends life until the answer comes. The Hebrew words for waiting are active: watching like a sentinel for the morning (Ps 130:6), hoping with a taut cord of expectation. Henri Nouwen distinguished passive waiting (killing time) from active waiting: being fully present to the moment, in the conviction that something is happening where you are. While Joseph waited he served &mdash; in Potiphar&rsquo;s house, in the prison. While David waited he led, wrote psalms, and spared Saul. Active waiting means doing the present assignment with full faithfulness while holding the future promise with open hands. We wait on God best not by doing nothing but by doing the next right thing.",
              },
              {
                title: "Advent and the Already/Not-Yet",
                body: "The church year begins with Advent &mdash; a season whose entire content is waiting. Israel waited centuries for the Messiah; Simeon and Anna grew old in the temple waiting for the consolation of Israel (Luke 2:25-38). And the church still waits: Christ has come, and Christ will come again. Theologians call this the already/not-yet tension &mdash; the kingdom is already inaugurated but not yet consummated, so all Christian existence is lived in the meantime. Romans 8:23-25 says even we who have the firstfruits of the Spirit groan inwardly as we wait... but if we hope for what we do not see, we wait for it with patience. Waiting is not an occasional interruption of the Christian life; it is its permanent posture until the King returns.",
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
              "Pray Psalm 13 in your own words: name the <em>how long</em> honestly before God &mdash; the unanswered prayer, the closed door, the silence &mdash; and then deliberately finish where the psalm finishes: <em>but I have trusted in your steadfast love</em>.",
              "Keep a promise inventory: write down the specific promises of God you are standing on while you wait (and the things you are waiting for), and revisit the list monthly to record what God has done &mdash; memory is the fuel of patient hope.",
              "Practice active waiting: identify your present assignment &mdash; the Potiphar&rsquo;s house or wilderness you are actually in &mdash; and do it with full faithfulness this week, refusing both passivity (doing nothing until God moves) and the Hagar shortcut (forcing the outcome yourself).",
              "Build a small Advent into ordinary time: choose one day a week to fast from hurry &mdash; no rushing, no filling silence with the phone &mdash; and let the discomfort of unfilled time train the muscle of waiting.",
              "Sit in silence before God for ten minutes a day this week (Ps 62:1, <em>for God alone my soul waits in silence</em>): no requests, no words, just attentive presence &mdash; waiting on God himself rather than only on his gifts.",
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
                name: "Andrew Murray",
                work: "Waiting on God",
                quote: "Waiting on God is the one lesson the soul has to learn. It is in waiting that the soul discovers how little it can do, and how much God can do... Let waiting on God be the very breath of your spiritual life.",
                bio: "Andrew Murray was a South African pastor and writer of the 19th century whose devotional classic Waiting on God consists of thirty-one brief meditations &mdash; one for each day of a month &mdash; on what it means to wait. For Murray, waiting is not primarily about delayed answers but about dependence itself: the creature&rsquo;s fundamental posture before the Creator, in which we learn that God himself, not merely his gifts, is what we are waiting for.",
              },
              {
                name: "Henri Nouwen",
                work: "The Spirituality of Waiting",
                quote: "Waiting is not a movement from nothing to something. It is a movement from something to something more... Those who are waiting are waiting very actively. They know that what they are waiting for is growing from the ground on which they are standing.",
                bio: "Henri Nouwen was a Dutch Catholic priest, professor, and writer who left academic prestige at Harvard and Yale to live in the L&rsquo;Arche Daybreak community among people with disabilities. His teaching on waiting, drawn from the figures of Zechariah, Elizabeth, Mary, Simeon, and Anna in Luke&rsquo;s Gospel, reframes waiting as active, open-ended trust &mdash; being fully present to the moment because God is already at work in it.",
              },
              {
                name: "Eugene Peterson",
                work: "A Long Obedience in the Same Direction",
                quote: "There is a great market for religious experience in our world; there is little enthusiasm for the patient acquisition of virtue, little inclination to sign up for a long apprenticeship in what earlier generations of Christians called holiness... It is not difficult in such a world to get a person interested in the message of the gospel; it is terrifically difficult to sustain the interest.",
                bio: "Eugene Peterson was a pastor, scholar, and translator of The Message whose book A Long Obedience in the Same Direction walks through the Psalms of Ascent as the songbook of a pilgrim people. Against a culture of instant everything, Peterson insisted that discipleship is inherently slow &mdash; that the life of faith is less a series of breakthroughs than a long, patient walking with God in the same direction over decades.",
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
              { ref: "Isa 40:31", text: "But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint." },
              { ref: "Ps 13:1-2, 5", text: "How long, O LORD? Will you forget me forever? How long will you hide your face from me? How long must I take counsel in my soul and have sorrow in my heart all the day?... But I have trusted in your steadfast love; my heart shall rejoice in your salvation." },
              { ref: "Ps 27:14", text: "Wait for the LORD; be strong, and let your heart take courage; wait for the LORD!" },
              { ref: "Lam 3:25-26", text: "The LORD is good to those who wait for him, to the soul who seeks him. It is good that one should wait quietly for the salvation of the LORD." },
              { ref: "Ps 130:5-6", text: "I wait for the LORD, my soul waits, and in his word I hope; my soul waits for the Lord more than watchmen for the morning, more than watchmen for the morning." },
              { ref: "Rom 8:24-25", text: "For in this hope we were saved. Now hope that is seen is not hope. For who hopes for what he sees? But if we hope for what we do not see, we wait for it with patience." },
              { ref: "Hab 2:3", text: "For still the vision awaits its appointed time; it hastens to the end &mdash; it will not lie. If it seems slow, wait for it; it will surely come; it will not delay." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Waiting Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What are you waiting on God for?</label>
                  <textarea
                    value={jWaitingFor}
                    onChange={e => setJWaitingFor(e.target.value)}
                    placeholder="Name the unanswered prayer, the closed door, the unfulfilled hope..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What promise of God are you standing on?</label>
                  <textarea
                    value={jPromise}
                    onChange={e => setJPromise(e.target.value)}
                    placeholder="Isaiah 40:31, Habakkuk 2:3, Romans 8:25 &mdash; or a word God has spoken to you..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What posture will you take while you wait?</label>
                  <textarea
                    value={jPosture}
                    onChange={e => setJPosture(e.target.value)}
                    placeholder="Active waiting: the present assignment you will do faithfully, the shortcut you will refuse, the lament you will pray..."
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
                {e.waiting_for && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Waiting For</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.waiting_for}</p></div>}
                {e.promise && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Promise</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.promise}</p></div>}
                {e.posture && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Posture</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.posture}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="Zy2AQlK6C5k" title="Heaven and Earth &mdash; The Already/Not-Yet Hope of the Bible (BibleProject)" />
            <VideoEmbed videoId="GswSg2ohqmA" title="The Book of Job &mdash; Trusting God When He Seems Silent (BibleProject)" />
            <VideoEmbed videoId="oLYORLZOaZE" title="Word Study: Shalom &mdash; The Peace We Are Waiting For (BibleProject)" />
            <VideoEmbed videoId="xmFPS0f-kzs" title="Gospel of the Kingdom &mdash; Living Between Promise and Fulfillment (BibleProject)" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
