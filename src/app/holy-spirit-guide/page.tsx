"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", TEAL = "#0D9488", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Person of the Holy Spirit — Not a Force", verse: "1 Cor 2:10-11", text: "The Holy Spirit is not an impersonal force or energy but the third person of the Trinity — personal, relational, divine. He has mind (1 Cor 2:10-11), will (1 Cor 12:11), emotions (Eph 4:30), and he can be lied to (Acts 5:3-4), grieved (Eph 4:30), and quenched (1 Thess 5:19). The classical creed affirms: the Spirit is Lord and gives life, who proceeds from the Father and the Son, who together with the Father and the Son is worshiped and glorified. Reducing the Spirit to a power to be wielded or a feeling to be sought is a fundamental theological error." },
  { title: "The Spirit's Work in Salvation — Conviction and Regeneration", verse: "John 16:8", text: "The Spirit applies the work of Christ to sinners: convicting the world of sin, righteousness, and judgment (John 16:8), regenerating the dead heart (Ezek 36:26-27; John 3:5-8), indwelling the believer (1 Cor 6:19), sealing them for the day of redemption (Eph 4:30), and interceding for them with groanings that words cannot express (Rom 8:26-27). Salvation is Trinitarian: the Father plans it, the Son accomplishes it, the Spirit applies it. There is no genuine Christian life apart from the Spirit's continual work." },
  { title: "Spiritual Gifts — for the Body's Benefit (1 Cor 12:7)", verse: "1 Cor 12:7", text: "To each one the manifestation of the Spirit is given for the common good. Spiritual gifts are not trophies of spiritual maturity or signs of special favor — they are capacities for service distributed by the Spirit as he determines (1 Cor 12:11) for the building up of the whole body. Major gift passages: Romans 12, 1 Corinthians 12-14, Ephesians 4, 1 Peter 4. The theological debates about cessationism (whether certain gifts have ceased) and continuationism (whether all gifts continue) are real, but all streams agree: gifts exist, they are for the church's benefit, and love is the non-negotiable context for their use." },
  { title: "The Fruit of the Spirit — Character, Not Performance (Gal 5:22-23)", verse: "Gal 5:22-23", text: "The fruit of the Spirit is love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. Note the singular: fruit, not fruits. The nine qualities are one organic whole, the character of Christ being reproduced in the believer. This is not behavior management — it is not trying harder to be more patient. It is the natural outgrowth of abiding in Christ (John 15:5): the one who remains in the vine bears fruit, not through striving but through union. Fruit is evidence of life, not the cause of it." },
  { title: "Being Filled with the Spirit — an Ongoing Command (Eph 5:18)", verse: "Eph 5:18", text: "Do not get drunk on wine… instead, be filled with the Spirit. The Greek is a present passive imperative: keep on being filled. This is not a one-time event but an ongoing posture of dependence, surrender, and receptivity. The Spirit is not to be managed or manufactured but sought. The means of being filled: prayer, Scripture, worship, repentance, and community. When Christians disagree about the Spirit — the emotional experience, the gifts, the dramatic — they often miss the central call: live every moment from a place of receptive dependence on the Spirit who is already at work within you." },
];

const voices = [
  { name: "Gordon Fee", role: "God's Empowering Presence", quote: "The Spirit is the key player in the present experience of salvation. He is not an addendum to Christianity but its life and power.", bio: "Gordon Fee was a New Testament scholar and professor whose definitive study of the Spirit in Paul's letters, God's Empowering Presence, is the standard academic treatment. He combined rigorous scholarship with deep personal piety and Pentecostal background to give both academic and pastoral readers the most thorough biblical account of the Spirit available." },
  { name: "J.I. Packer", role: "Keep in Step with the Spirit", quote: "The Spirit is given to glorify Christ, and we test the spirits by asking whether they glorify Christ or themselves. Any movement that centers on spiritual experience rather than on Jesus Christ misidentifies its source.", bio: "J.I. Packer was an Anglican theologian who served as a theologian-at-large for Regent College, Vancouver. Keep in Step with the Spirit remains the most balanced and comprehensive treatment of pneumatology for the general reader — addressing both the Reformed concern for biblical sobriety and the charismatic concern for authentic experience." },
  { name: "Francis Chan", role: "Forgotten God", quote: "The Holy Spirit is not a consumer product to be added to your existing life. He is the presence of God himself who comes to disrupt, reshape, and inhabit the whole of your life. A Christianity without the Spirit is not Christianity.", bio: "Francis Chan is a pastor and author who wrote Forgotten God as an indictment of the American church's practical neglect of the Spirit — not denial, but irrelevance. His call for a return to Spirit-dependence, radical obedience, and authentic community has been influential across evangelical and charismatic traditions." },
];

const practices = [
  { title: "Daily Prayer of Dependence", text: "Daily prayer that includes explicit dependence on the Spirit — asking to be filled, asking for the Spirit's guidance in specific decisions." },
  { title: "Discovering Your Spiritual Gifts", text: "Discovering your spiritual gifts through a combination of assessment, experimentation, and community confirmation — then deploying them." },
  { title: "Silence and Solitude", text: "Practicing the discipline of silence and solitude to create space for the Spirit to speak and work without the noise of busyness." },
  { title: "Meditating on the Fruit of the Spirit", text: "Memorizing and meditating on the Gal 5:22-23 fruit list — examining your life against it and bringing specific deficiencies to prayer." },
  { title: "Reading Acts Together", text: "In a group: reading Acts together and tracking the Spirit's work — discussing what analogous work the Spirit might be doing in your context." },
];

const scriptures = [
  { verse: "John 16:13", text: "But when he, the Spirit of truth, comes, he will guide you into all the truth. He will not speak on his own; he will speak only what he hears, and he will tell you what is yet to come." },
  { verse: "Rom 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "1 Cor 12:11", text: "All these are the work of one and the same Spirit, and he distributes them to each one, just as he determines." },
  { verse: "Gal 5:22-23", text: "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law." },
  { verse: "Eph 5:18", text: "Do not get drunk on wine, which leads to debauchery. Instead, be filled with the Spirit." },
  { verse: "Acts 1:8", text: "But you will receive power when the Holy Spirit comes on you; and you will be my witnesses in Jerusalem, and in all Judea and Samaria, and to the ends of the earth." },
];

const videos = [
  { id: "xF3x3cuB1Eo", title: "Who Is the Holy Spirit? Understanding the Third Person of the Trinity" },
  { id: "QfhFvCHhcHY", title: "Francis Chan: Forgotten God — The Holy Spirit We Ignore" },
  { id: "t8k7-2H2QNQ", title: "Spiritual Gifts — How to Discover and Use Yours" },
  { id: "5FCGRhf0KjQ", title: "The Fruit of the Spirit — What It Is and How It Grows" },
];

type HSEntry = { id: string; date: string; encounter: string; gift: string; fruit: string };

export default function HolySpiritGuidePage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<HSEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_holyspirit_entries") ?? "[]"); } catch { return []; }
  });
  const [jEncounter, setJEncounter] = useState("");
  const [jGift, setJGift] = useState("");
  const [jFruit, setJFruit] = useState("");

  useEffect(() => { localStorage.setItem("vine_holyspirit_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jEncounter.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), encounter: jEncounter, gift: jGift, fruit: jFruit }, ...prev]);
    setJEncounter(""); setJGift(""); setJFruit("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Theology &amp; Doctrine</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Holy Spirit Guide</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>Who is the Holy Spirit? Explore the Spirit&rsquo;s person and work in the Trinity, conviction, regeneration, spiritual gifts, and the fruit of the Spirit.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? TEAL : BORDER}`, background: tab === t.id ? TEAL + "22" : "transparent", color: tab === t.id ? TEAL : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: TEAL, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.92rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem 1.4rem" }}>
                <h3 style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: 8 }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.65 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: TEAL, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${TEAL}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: TEAL, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on the Spirit&rsquo;s Work</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to reflect on your experience of the Holy Spirit honestly and prayerfully.</p>
            {[
              { label: "Encounter — a recent experience or moment where you sensed the Spirit's work", val: jEncounter, set: setJEncounter },
              { label: "Gift — a spiritual gift you believe you have or want to explore", val: jGift, set: setJGift },
              { label: "Fruit — an area of the Spirit's fruit you want to see grow in your life", val: jFruit, set: setJFruit },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: TEAL, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: TEAL }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: TEAL, fontWeight: 600 }}>Encounter:</span> {e.encounter}</p>
                      {e.gift && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: TEAL, fontWeight: 600 }}>Gift:</span> {e.gift}</p>}
                      {e.fruit && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: TEAL, fontWeight: 600 }}>Fruit:</span> {e.fruit}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: TEAL }}>{v.title}</h3>
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
