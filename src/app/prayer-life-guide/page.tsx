"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", ACCENT = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

type PLEntry = { id: string; date: string; barrier: string; method: string; fruit: string };

export default function PrayerLifeGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<PLEntry[]>(() => {
    try { const s = localStorage.getItem("vine_prayerlife_entries"); return s ? JSON.parse(s) : []; } catch { return []; }
  });
  const [jBarrier, setJBarrier] = useState("");
  const [jMethod, setJMethod] = useState("");
  const [jFruit, setJFruit] = useState("");

  useEffect(() => { localStorage.setItem("vine_prayerlife_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jBarrier.trim() && !jMethod.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), barrier: jBarrier, method: jMethod, fruit: jFruit }, ...prev]);
    setJBarrier(""); setJMethod(""); setJFruit("");
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
          Building a Prayer Life
        </h1>
        <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.7, maxWidth: 640, margin: "0 0 2rem" }}>
          Prayer is not a technique but a relationship &mdash; and like any relationship, it must be cultivated over time with honesty, persistence, and expectation. This guide walks through the theology, models, and practical disciplines of a deepening prayer life.
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
                title: "Prayer as Relationship, Not Performance (Matt 6:6)",
                body: "But when you pray, go into your room and shut the door and pray to your Father who is in secret. Prayer is not fundamentally a religious exercise but a relational act &mdash; the creature speaking to the Creator, the child to the Father. Jesus assumes his disciples will pray (&ldquo;when you pray,&rdquo; not &ldquo;if you pray&rdquo;) but critiques performance-oriented prayer as fundamentally misoriented. The danger is not too much prayer but prayer aimed at the wrong audience. God is not impressed by eloquence, volume, or length &mdash; he is responsive to honesty, trust, and persistent turning toward him. Prayer is the primary language of faith.",
              },
              {
                title: "The ACTS Model &mdash; A Structure for Completeness",
                body: "Adoration, Confession, Thanksgiving, Supplication &mdash; ACTS is not a formula but a map. Adoration grounds prayer in who God is rather than what you need. Confession clears the static of unacknowledged sin between you and God. Thanksgiving trains attention toward grace already received. Supplication &mdash; asking &mdash; is the part most people go straight to, but arriving there last ensures it is offered from a right orientation. Many Christians spend 90 percent of prayer time in supplication and wonder why their prayer life feels thin. Starting with adoration changes everything: you enter God&rsquo;s presence on his terms rather than yours.",
              },
              {
                title: "Fixed-Hour Prayer &mdash; Praying at Set Times (Ps 119:164; Dan 6:10)",
                body: "Seven times a day I praise you for your righteous rules. Daniel knelt three times a day and prayed and gave thanks before his God. The ancient practice of praying at fixed hours &mdash; morning, noon, and evening at minimum &mdash; structures the entire day around God rather than squeezing prayer into whatever time remains. The Daily Office in Anglican, Catholic, and Orthodox traditions formalizes this rhythm: morning and evening prayer as daily anchors. What fixed-hour prayer does is resist the assumption that secular time is the default into which prayer is inserted; it insists that the day belongs to God and is organized accordingly. This is not legalism but wisdom about how humans form habits.",
              },
              {
                title: "Warfare Prayer &mdash; Standing in the Conflict (Eph 6:12)",
                body: "For we do not wrestle against flesh and blood, but against the rulers, against the authorities, against the cosmic powers over this present darkness. Paul&rsquo;s vision of prayer includes a warfare dimension: prayer is not only communion but combat. Intercession for people in bondage, prayer over places where darkness is visible, binding and loosing, praying against specific spiritual opposition &mdash; these are not peripheral concerns but part of the full-orbed prayer life Paul describes. The armor of God passage (Eph 6:10-18) ends with a call to pray at all times in the Spirit, with all prayer and supplication. Warfare prayer takes seriously that the enemy is active and that prayer is among the believer&rsquo;s primary weapons.",
              },
              {
                title: "Unanswered Prayer &mdash; The Discipline of Persistence (Luke 18:1-8)",
                body: "He told them a parable to the effect that they ought always to pray and not lose heart. The parable of the persistent widow addresses the reality that God does not always answer immediately &mdash; and that the failure to receive an answer is not necessarily evidence of disqualification. Jesus explicitly addresses the risk of losing heart in prayer and commands persistence. The theological question underneath is not whether God hears but how to hold trust and honesty together when circumstances contradict what we have prayed. Unanswered prayer is not the failure of the prayer life; it is a school in which deeper trust, honest lament, and ultimate surrender are formed.",
              },
              {
                title: "Praying with the Family &mdash; Household Prayer (Josh 24:15)",
                body: "As for me and my house, we will serve the Lord. Prayer in the household context &mdash; with spouse, with children, at meals, at bedtime &mdash; is one of the primary ways faith is transmitted across generations. The Shema (Deut 6:4-9) commands that the words of God be impressed on children and talked about when sitting at home. Praying together with a spouse requires vulnerability that may be harder than praying alone. It also creates a witness to children that their parents have a real God they actually talk to, not simply a religion they observe. Corporate prayer within the family may be the single most formative practice in Christian households.",
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
              "Establish a fixed time and place for daily prayer &mdash; the same location and time each day. Habit is not the enemy of authentic prayer; it is its infrastructure. Decide when, where, and for how long before the need arises.",
              "Use the ACTS structure for your next week of morning prayer: spend 3-4 minutes on each movement &mdash; adoration (who God is), confession (honest acknowledgment of sin), thanksgiving (specific naming of grace), supplication (requests). Notice how arriving at supplication last changes how you ask.",
              "Try praying the Psalms. Read one psalm slowly aloud each day &mdash; not as information but as your own words to God. When the psalm expresses anguish you don&rsquo;t feel, pray it for someone who does. When it expresses praise you can&rsquo;t muster, pray it as aspiration. The Psalter is the prayer book of the people of God for 3,000 years.",
              "Practice fixed-hour prayer for one week: stop at morning, noon, and before bed for even 3 minutes of intentional turning to God. Use the Jesus Prayer (&ldquo;Lord Jesus Christ, Son of God, have mercy on me, a sinner&rdquo;) as a repeated anchor at each pause.",
              "Begin a prayer journal: write your prayers to God. The discipline of writing forces specificity and slows the mind enough to pray honestly. Review past entries monthly &mdash; the pattern of what God has done with your requests is often hidden from daily notice.",
              "Pray out loud with your spouse or a close friend once a week. The vulnerability of voiced prayer with another person forms trust and breaks through the isolation in which many prayer lives stagnate.",
              "Engage in intercession for others: keep a running list of 5-10 people for whom you are praying regularly. Name them, name their specific needs, and update the list. Intercession disciplines attention toward other people and combats the natural self-centeredness of the prayer life.",
              "When you find yourself struggling to pray for more than a few minutes, try extended prayer: take one hour, set a timer, and don&rsquo;t stop until it rings. Use different postures (sitting, walking, kneeling), different modes (spoken, silent, written), and different subjects. You will discover that the hardest part is the first ten minutes.",
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
                quote: "The men who have done the most for God in this world have been early on their knees. He who fritters away the early morning, its opportunity and freshness, in other pursuits than seeking God will make poor headway seeking him the rest of the day.",
                bio: "E.M. Bounds was a 19th-century Methodist minister and Civil War chaplain whose nine books on prayer remain foundational texts in evangelical Christianity. His own practice of rising at 4 a.m. to pray three hours before breakfast was not ascetic performance but natural outflow of conviction that prayer was the primary work of the Christian. Power Through Prayer (1912) is his most widely read work and makes the case that prayer is the indispensable condition for effective ministry and Christian vitality.",
              },
              {
                name: "Ole Hallesby",
                work: "Prayer",
                quote: "Prayer is nothing more involved than letting Jesus into our needs. Prayer is the breath of the soul, the organ by which we receive Christ into our parched and withered hearts. Helplessness is the very best basis for prayer.",
                bio: "Ole Hallesby was a Norwegian Lutheran theologian whose 1931 book Prayer has been called one of the finest books on the subject ever written. Its central insight is liberating: the prerequisite for prayer is not eloquence or spiritual achievement but helplessness &mdash; an honest acknowledgment that we cannot get through without God. His framing removes performance anxiety from prayer and replaces it with honest dependence. Prayer went through numerous editions and has been translated into many languages.",
              },
              {
                name: "Richard Foster",
                work: "Prayer: Finding the Heart&rsquo;s True Home",
                quote: "Prayer is the central avenue God uses to transform us. If we are unwilling to change, we will abandon prayer as a noticeable characteristic of our lives. The closer we come to the heartbeat of God, the more we see our need and the more we desire to be conformed to Christ.",
                bio: "Richard Foster is a Quaker theologian and the founder of Renovar&eacute;, an organization devoted to Christian spiritual formation. His Prayer: Finding the Heart&rsquo;s True Home (1992) identifies 21 types of prayer and situates them along a spectrum from inward prayer to outward prayer to upward prayer. Foster&rsquo;s great contribution is showing that the prayer life is not monotone: it includes lament and adoration, warfare and contemplation, spoken and silent, personal and corporate. His Celebration of Discipline (1978) introduced the spiritual disciplines to a generation of evangelical Christians.",
              },
              {
                name: "Andrew Murray",
                work: "With Christ in the School of Prayer",
                quote: "The man who mobilizes the Christian church to pray will make the greatest contribution to world evangelization in history. Prayer is not monologue, but dialogue; God&rsquo;s voice is its most essential part.",
                bio: "Andrew Murray was a South African Dutch Reformed pastor and prolific writer on the interior life of faith. With Christ in the School of Prayer (1885), organized around the disciples&rsquo; request &ldquo;Lord, teach us to pray,&rdquo; is one of the most sustained treatments of prayer in the devotional tradition. Murray takes each clause of the Lord&rsquo;s Prayer as a subject for meditation and exposition. His central insight is that Jesus is not only the model for prayer but also the one who prays within us &mdash; intercession is participation in Christ&rsquo;s own ongoing priestly ministry.",
              },
            ].map(v => (
              <div key={v.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "1.5rem 1.75rem" }}>
                <div style={{ marginBottom: "0.75rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.05rem", color: TEXT }}>{v.name}</div>
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
              { ref: "Matt 6:6", text: "But when you pray, go into your room and shut the door and pray to your Father who is in secret. And your Father who sees in secret will reward you." },
              { ref: "Phil 4:6-7", text: "Do not be anxious about anything, but in everything by prayer and supplication with thanksgiving let your requests be made known to God. And the peace of God, which surpasses all understanding, will guard your hearts and your minds in Christ Jesus." },
              { ref: "Luke 18:1", text: "And he told them a parable to the effect that they ought always to pray and not lose heart." },
              { ref: "1 Thess 5:17", text: "Pray without ceasing." },
              { ref: "Rom 8:26-27", text: "Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words. And he who searches hearts knows what is the mind of the Spirit, because the Spirit intercedes for the saints according to the will of God." },
              { ref: "Ps 5:3", text: "O Lord, in the morning you hear my voice; in the morning I prepare a sacrifice for you and watch." },
              { ref: "James 5:16", text: "Therefore, confess your sins to one another and pray for one another, that you may be healed. The prayer of a righteous person has great power as it is working." },
              { ref: "Matt 7:7-8", text: "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you. For everyone who asks receives, and the one who seeks finds, and to the one who knocks it will be opened." },
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
              <h2 style={{ color: ACCENT, fontWeight: 800, fontSize: "1.1rem", margin: "0 0 0.4rem" }}>Prayer Life Journal</h2>
              <p style={{ color: MUTED, fontSize: "0.88rem", margin: "0 0 1.25rem", lineHeight: 1.6 }}>Private and stored only on this device. No account required.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What barrier or struggle are you facing in prayer right now?</label>
                  <textarea
                    value={jBarrier}
                    onChange={e => setJBarrier(e.target.value)}
                    placeholder="Distraction, dryness, doubt, busy schedule, not knowing what to say..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What method or practice are you trying or wanting to try?</label>
                  <textarea
                    value={jMethod}
                    onChange={e => setJMethod(e.target.value)}
                    placeholder="ACTS model, fixed-hour prayer, praying the Psalms, prayer journal, intercession list..."
                    style={{ width: "100%", minHeight: 80, background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.75rem", color: TEXT, fontSize: "0.93rem", lineHeight: 1.6, resize: "vertical", boxSizing: "border-box" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", color: MUTED, fontSize: "0.82rem", marginBottom: "0.3rem", fontWeight: 600, letterSpacing: 0.5 }}>What fruit have you seen from your prayer life, even small signs?</label>
                  <textarea
                    value={jFruit}
                    onChange={e => setJFruit(e.target.value)}
                    placeholder="Peace, answers, changed desires, closer to God, prayers answered for others..."
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
                {e.barrier && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Barrier</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.barrier}</p></div>}
                {e.method && <div style={{ marginBottom: "0.5rem" }}><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Method</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.method}</p></div>}
                {e.fruit && <div><span style={{ color: ACCENT, fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>Fruit</span><p style={{ color: TEXT, lineHeight: 1.6, margin: "0.2rem 0 0", whiteSpace: "pre-wrap", fontSize: "0.93rem" }}>{e.fruit}</p></div>}
              </div>
            ))}
          </div>
        )}

        {/* VIDEOS */}
        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: ACCENT, margin: "0 0 0.5rem" }}>Videos</h2>
            <VideoEmbed videoId="tlWMAqRPVW8" title="How to Pray: A Complete Guide to Building a Prayer Life" />
            <VideoEmbed videoId="Kv3j2kxNUZo" title="The ACTS Model of Prayer &mdash; Adoration, Confession, Thanksgiving, Supplication" />
            <VideoEmbed videoId="j7DkU8p1n1c" title="Fixed-Hour Prayer and the Daily Office Explained" />
            <VideoEmbed videoId="RM0Oc1KnPDA" title="Praying the Psalms: How to Use the Psalter as Your Prayer Book" />
            <VideoEmbed videoId="GMb5oN8-tFI" title="Why Your Prayer Life Is Dry and How to Revive It" />
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}
