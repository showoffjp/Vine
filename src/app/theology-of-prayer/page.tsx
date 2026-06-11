"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", INDIGO = "#6366F1", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "What Is Prayer? — the Three Most Common Misunderstandings", verse: "Matt 6:9-10", text: "Prayer is not a vending machine for getting things from God, not an update service for informing God of things he does not know, and not a performance of piety for the benefit of observers. Prayer is conscious, relational communication with the living God who is present and engaged. The model prayer in Matthew 6:9-13 establishes the shape of authentic prayer: God is Father (relational intimacy), hallowed be your name (theocentric orientation — God's honor, not my preferences, is the first concern), your kingdom come (submissive eschatology — I am asking for what God has already promised), daily bread (daily dependence, not stockpiled self-sufficiency), forgiveness (confessional honesty — the petition Jesus expands in his commentary), and deliver us from evil (a recognition that prayer exists inside a spiritual conflict). The Lord's Prayer is a curriculum for how to pray, not merely a script to repeat." },
  { title: "Does Prayer Change God's Mind? — the Sovereignty-Prayer Tension", verse: "Luke 18:1", text: "One of the hardest theological questions in Christian faith: if God is sovereign and knows all things, why pray? The three major approaches each have serious proponents. The Arminian position holds that prayer genuinely changes the divine course of events — God responds to prayer in ways he would not have acted without it, and this is not a threat to his sovereignty but an expression of how he has chosen to work in covenant with his people. The Reformed position holds that prayer is the means God ordains to accomplish his sovereign ends — he has predestined both the prayer and its answer, and prayer is the means by which the ordained outcome is brought about. Open Theism holds that God genuinely responds to prayer in ways he has not predetermined. What Jesus's own practice of prayer — extended, earnest, and sometimes agonized — suggests is that prayer is not redundant even for the Son of God. The tension cannot be resolved by making prayer a formality." },
  { title: "Unanswered Prayer — What to Do When God Says No", verse: "Matt 7:7-8", text: "Matthew 7:7-8 says ask and it will be given, seek and you will find, knock and the door will be opened. Paul asked three times for the thorn in the flesh to be removed and God said no — and the no was more merciful than any yes could have been: my grace is sufficient for you, for my power is made perfect in weakness (2 Cor 12:8-9). Jesus in Gethsemane prayed not my will, but yours — the most honest prayer in Scripture, offered by the one who knew God's will better than anyone. The spectrum of responses to unanswered prayer runs from formulaic name-it-and-claim-it theology (the no is always your fault) to fatalistic resignation (nothing really changes so why bother). Faithfulness in the face of persistent unanswered prayer means continuing to bring real desires to God while trusting his wisdom, and discovering that the communion created in prayer is itself a gift worth more than the granted petition." },
  { title: "Contemplative Prayer — the Tradition the Western Church Has Mostly Lost", verse: "Ps 46:10", text: "The Desert Fathers, Lectio Divina, Centering Prayer, and the Ignatian Examen represent a contemplative tradition stretching from the third century to the present — a tradition that the Western evangelical church has largely neglected in favor of verbal, petitionary, and expository forms of prayer. Contemplative prayer is not the emptying of the mind of all content, which is the Eastern religious practice critics sometimes confuse it with. It is attentive receptivity to the presence of God — the practice of being still and knowing that he is God. Lectio Divina (slow, receptive reading of Scripture as a form of listening prayer) is less controversial than Centering Prayer because it is explicitly Scripture-anchored. The listening dimension of prayer — waiting, attending, receiving — has been crowded out in most evangelical practice, which tends to treat prayer as a monologue directed toward God rather than a dialogue with him. Solitude and silence are prerequisites for contemplative prayer, which makes them also prerequisites for spiritual depth." },
  { title: "Corporate Prayer — the Power and Neglect of Praying Together", verse: "Acts 1:14", text: "They all joined together constantly in prayer — and Pentecost followed. The early church's corporate prayer life was not a transitional ritual between announcements and the sermon: it was the primary gathering of the community before God. The prayer meeting preceded and enabled every spiritual breakthrough in Acts. In most Western evangelical churches, corporate prayer has been reduced in practice to a pastoral monologue that opens and closes the service, with occasional congregational participation in moments of crisis. The prayer meeting — once the defining gathering of the healthy church — is the most neglected and most needed meeting in the church. What genuine corporate prayer looks like: honest, specific, participatory, sustained, and expectant. The church that does not pray together will eventually find that it has little left that is worth doing together." },
];

const voices = [
  { name: "P.T. Forsyth", role: "The Soul of Prayer", quote: "The greatest thing any of us can do is pray. It is greater than all education, greater than all conference, greater than all organization, greater than all methods and movements — because it is the source of them all. And the reason we pray so little is that we have not yet begun to believe in God as much as we believe in the things we do for him.", bio: "P.T. Forsyth was a Scottish Congregationalist theologian writing in the early twentieth century whose work on prayer has never been surpassed in theological depth. His central argument is that prayer is not a technique or a spiritual discipline among others — it is the fundamental act of the creature before the Creator, and its difficulty is proportionate to its importance. Forsyth's work is harder to read than most popular prayer books, but there is more theology of prayer per page than anywhere else." },
  { name: "Eugene Peterson", role: "Working the Angles", quote: "The two most important acts of the pastor are prayer and Scripture — not preaching, not administration, not pastoral care in the conventional sense, but the angles that give everything else its shape. The scandal of the church is not immorality or heresy, most of the time — it is the busyness of pastors who are professionally active and personally prayerless, who have traded the hard work of prayer for the visible work of ministry.", bio: "Peterson's Working the Angles is addressed primarily to pastors but applies to every Christian who finds themselves busy in service and thin in prayer. His argument is that the visible angles of ministry — preaching and teaching — depend on the invisible angles of prayer and Scripture study, and that neglecting the invisible angles eventually collapses the entire structure. Peterson's own practice of prayer was shaped by the Psalms, which he translated over decades in The Message." },
  { name: "Richard Foster", role: "Prayer: Finding the Heart's True Home", quote: "Prayer is the central avenue God uses to transform us. If we are willing to make space for it in the texture of our daily lives, we will find that prayer covers a vast range of human experience — from the simplest arrow prayer in a moment of need to the deepest contemplative silence before the face of God. Learning to pray is one of the most important things a person can do, and it is also one of the most underestimated, because we imagine it is simpler than it is.", bio: "Richard Foster's Prayer: Finding the Heart's True Home is the most comprehensive popular treatment of Christian prayer in print. Foster surveys twenty-one forms of prayer — from simple beginning prayer to contemplative prayer — and treats the full range of the tradition with both theological care and pastoral warmth. Foster's own formation was shaped by Quaker spirituality, which explains his strong emphasis on listening, silence, and the inward dimension of prayer." },
];

const practices = [
  "The Daily Office: praying fixed-hour prayers as a structured practice (morning, midday, evening) rather than only when the mood arises",
  "Lectio Divina: slow, receptive reading of Scripture as a form of listening prayer rather than study or exposition",
  "The ACTS model as a starter — Adoration, Confession, Thanksgiving, Supplication — to give shape to unstructured prayer",
  "Praying the Psalms in their entirety over a 30-day cycle, including the laments and the imprecatory psalms",
  "Weekly extended prayer — one hour per week, outside of church gatherings — as a committed practice rather than an intention",
];

const scriptures = [
  { verse: "Matt 6:9-10", text: "Our Father in heaven, hallowed be your name, your kingdom come, your will be done, on earth as it is in heaven." },
  { verse: "Luke 18:1", text: "Then Jesus told his disciples a parable to show them that they should always pray and not give up." },
  { verse: "Phil 4:6-7", text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus." },
  { verse: "1 Thess 5:17", text: "Pray continually." },
  { verse: "James 5:16", text: "The prayer of a righteous person is powerful and effective." },
  { verse: "Ps 46:10", text: "He says, be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth." },
];

const videos = [
  { id: "4K9CRLW4CMY", title: "What Is Prayer? — The Theology of Talking to God" },
  { id: "RFTrM_nMzKs", title: "The Lord's Prayer Unpacked" },
  { id: "mflciSg6eBo", title: "Contemplative Prayer and the Christian Tradition" },
  { id: "VLtxkW-6_KU", title: "Corporate Prayer and the Health of the Church" },
];

type TPEntry = { id: string; date: string; question: string; practice: string; encounter: string };

export default function TheologyOfPrayerPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<TPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_theopray_entries") ?? "[]"); } catch { return []; }
  });
  const [jQuestion, setJQuestion] = useState("");
  const [jPractice, setJPractice] = useState("");
  const [jEncounter, setJEncounter] = useState("");

  useEffect(() => { localStorage.setItem("vine_theopray_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jQuestion.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), question: jQuestion, practice: jPractice, encounter: jEncounter }, ...prev]);
    setJQuestion(""); setJPractice(""); setJEncounter("");
  };

  const tabs = [
    { id: "theology", label: "Theology" }, { id: "practices", label: "Practices" },
    { id: "voices", label: "Voices" }, { id: "scripture", label: "Scripture" },
    { id: "journal", label: "Journal" }, { id: "videos", label: "Videos" },
  ];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, paddingTop: "var(--header-height, 80px)" }}>
      <Navbar />
      <main id="main-content" style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Spiritual Formation</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Theology of Prayer</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>What prayer is, why it works, and how to pray more honestly — the theology behind the practice, the tradition the church has mostly lost, and the habits that build a real prayer life.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? INDIGO : BORDER}`, background: tab === t.id ? INDIGO + "22" : "transparent", color: tab === t.id ? INDIGO : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: INDIGO, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.1rem 1.4rem", display: "flex", gap: 12, alignItems: "flex-start" }}>
                <span style={{ color: INDIGO, fontWeight: 700, fontSize: "1rem", marginTop: 2 }}>{i + 1}.</span>
                <p style={{ color: MUTED, fontSize: "0.92rem", lineHeight: 1.65, margin: 0 }}>{p}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: INDIGO, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${INDIGO}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: INDIGO, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Prayer Journal</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to reflect honestly on your prayer life — the questions you are wrestling with, the practices you are exploring, and the moments where God has felt near.</p>
            {[
              { label: "Question — a question about prayer you are wrestling with", val: jQuestion, set: setJQuestion },
              { label: "Practice — a prayer practice you are exploring", val: jPractice, set: setJPractice },
              { label: "Encounter — a moment in prayer where you sensed God near", val: jEncounter, set: setJEncounter },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: INDIGO, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: INDIGO }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: INDIGO, fontWeight: 600 }}>Question:</span> {e.question}</p>
                      {e.practice && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: INDIGO, fontWeight: 600 }}>Practice:</span> {e.practice}</p>}
                      {e.encounter && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: INDIGO, fontWeight: 600 }}>Encounter:</span> {e.encounter}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {videos.map((v, i) => (
              <div key={i}>
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: INDIGO }}>{v.title}</h3>
                <VideoEmbed videoId={v.id} title={v.title} />
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
