"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "The Church Was Born to Multiply — Acts as the Template", verse: "Acts 13:1-3", text: "The early church did not build a single great congregation in Jerusalem — it scattered and planted. Acts 2, 8, and 13 trace the Spirit-driven expansion from Jerusalem to Judea to the ends of the earth. The book of Acts is a church planting manual as much as it is a history. The Spirit drives expansion, not consolidation. When a church stops planting, it is worth asking whether it has confused institutional preservation with the mission of God. Multiplication is not a program choice — it is in the DNA of what the church is." },
  { title: "The Apostolic Call — Not Everyone Is a Church Planter, But the Church Needs Those Who Are", verse: "Eph 4:11-12", text: "The apostolic function in Ephesians 4 is the planting, pioneering, boundary-crossing function — the one who takes the gospel where it has not yet gone. Not every Christian carries this calling, but every church needs those who do. Recognizing the church planter calling is less about spiritual gifts inventories than about apostolic track record: what has this person actually started? Where have they gone that others have not yet gone? The calling tends to confirm itself through a persistent burden for the unreached and a restlessness that established ministry cannot satisfy." },
  { title: "Contextualization — the Gospel in Every Culture Without Losing the Gospel", verse: "1 Cor 9:22", text: "I have become all things to all people so that by all means I might save some. Paul's missionary method is the model for contextualization: changing form while preserving content. The twin dangers are syncretism — the gospel absorbed into culture so that culture is affirmed rather than transformed — and irrelevance — the gospel so unconnected from culture that it cannot be heard. Faithful contextualization requires the planter to understand Scripture deeply enough to distinguish the gospel from its Western or suburban wrapping, and to understand the target culture deeply enough to translate without distorting." },
  { title: "The Incarnational Model — Presence Before Program", verse: "John 1:14", text: "The Word became flesh and dwelt among us. The church planter who moves into the neighborhood before launching the church embodies the incarnational principle: presence as the foundation of credibility. The difference between parachute church planting and incarnational planting is the difference between vendor and neighbor. A vendor arrives with a product and leaves when the product cycle ends. A neighbor stays, is known, suffers the neighborhood's losses, and celebrates its wins. What it costs to actually become a neighbor rather than a vendor of religious services is the same thing Jesus paid — the relinquishment of comfort and distance." },
  { title: "Failure and the Church Planter — the Statistics No One Mentions", verse: "Matt 28:19-20", text: "The majority of church plants do not survive their first five years. This is not primarily a strategic problem — it is a formation problem. The soil parable in Matthew 13 describes four kinds of ground, and only one produces lasting fruit. The church planter who has not examined the soil — their own character, their team's health, the community's receptivity — often discovers mid-plant what a careful assessment would have revealed earlier. A theology of fruitfulness and faithfulness insists that what God calls a planter to is not always numerical success but faithful obedience. The dead plant is not always a failure; the plant that never launched because the call was never real is." },
];

const voices = [
  { name: "Tim Keller", role: "Center Church", quote: "Contextualizing the gospel means translating it into the thought forms, aspirations, and stories of a particular culture — without losing its content. The planter must understand both Scripture and culture deeply enough to do this faithfully. Neither a Bible-only approach that ignores culture nor a culture-driven approach that softens Scripture will produce genuine gospel communities.", bio: "Keller's Center Church is the most rigorous theological treatment of contextualization available for urban church planters. His argument is that the gospel must be neither over-contextualized (absorbed into culture) nor under-contextualized (disconnected from it), and that doing this well requires theological depth and cultural intelligence simultaneously. His own ministry at Redeemer Presbyterian in Manhattan modeled what contextualizing the historic Reformed faith for a secular urban environment could look like." },
  { name: "Roland Allen", role: "Missionary Methods: St. Paul's or Ours?", quote: "Paul planted churches with astonishing speed in province after province, entrusting their ongoing life to the Spirit and the Word rather than to continued outside oversight and resource dependency. The question his methods force is whether our dependency-creating models actually reflect confidence in the Spirit — or whether they reflect confidence only in ourselves.", bio: "Allen's 1912 study of Pauline church planting methods remains one of the most provocative books in missiology. His central argument is that Paul planted quickly, trusted the local community to carry on, and moved — and that modern Western mission methods invert this by creating dependency rather than releasing indigenous capacity. Allen wrote a century before the church planting movement literature, but his insights anticipated everything the movements have since confirmed empirically." },
  { name: "Alan Hirsch", role: "The Forgotten Ways", quote: "Every church and every Christian carries the missional DNA of the early movement — the apostolic imagination, the Spirit-driven momentum, the boundary-crossing instinct. It has not been destroyed. It has been suppressed by Christendom's institutional habits. Recovering it is not a matter of adopting new programs but of recovering a forgotten identity.", bio: "Hirsch argues that the church's capacity for exponential multiplication is not a special gift given only to certain movements — it is encoded in the gospel itself and in the nature of the Spirit who inhabits the church. His concept of missional DNA (mDNA) gives church planters a framework for understanding why some movements multiply and others stagnate. The Forgotten Ways is essential reading for anyone who senses that the church's potential for expansion is vastly underrealized." },
];

const practices = [
  { icon: "🚶", title: "Prayer-Walking the Target Context", text: "Before any planting activity begins, walk the neighborhood, city, or people group you sense called to — on foot, praying as you go. This is not a technique but a posture: arriving as a supplicant rather than a strategist, asking God to open your eyes to what is already happening spiritually and to what he is preparing." },
  { icon: "🗺️", title: "Demographic and Spiritual Mapping", text: "Who lives in this context, what do they believe, where are the spiritual openings? A thorough mapping — demographic data, existing churches and their reach, spiritual lostness patterns, community pain points — gives the planter a data-grounded picture of the soil before planting. The work that happens before the plant is often what determines whether it survives." },
  { icon: "🏠", title: "Residency in an Established Church Plant", text: "Before planting, spend significant time inside a functioning church plant — not as a spectator but as a worker. Learn from someone who has done it: the decisions they made, the mistakes they made, what they would do differently. The residency model, practiced by most serious planting networks, dramatically increases survival rates." },
  { icon: "👥", title: "Building a Core Team Before Launching Publicly", text: "The launch team is the spiritual and relational foundation of the plant. A public launch without a committed core team is a building without a foundation. Core team formation takes time — often 12 to 18 months — and requires rigorous discernment about who should be part of it. The people who launch with you will shape the culture of everything that follows." },
  { icon: "💰", title: "Financial Sustainability Planning from Year One", text: "The most common reason church plants die is financial, not spiritual. A realistic financial plan — funding sources, break-even timeline, economic model — is not unspiritual pragmatism. It is stewardship. Planters who ignore finances until they are in crisis often find that the crisis ends the plant before the gospel has had time to take root." },
];

const scriptures = [
  { verse: "Acts 13:1-3", text: "While they were worshiping the Lord and fasting, the Holy Spirit said, Set apart for me Barnabas and Saul for the work to which I have called them. So after they had fasted and prayed, they placed their hands on them and sent them off." },
  { verse: "Eph 4:11-12", text: "So Christ himself gave the apostles, the prophets, the evangelists, the pastors and teachers, to equip his people for works of service, so that the body of Christ may be built up." },
  { verse: "1 Cor 9:22", text: "I have become all things to all people so that by all possible means I might save some. I do all this for the sake of the gospel, that I may share in its blessings." },
  { verse: "John 1:14", text: "The Word became flesh and made his dwelling among us. We have seen his glory, the glory of the one and only Son, who came from the Father, full of grace and truth." },
  { verse: "Matt 28:19-20", text: "Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you." },
  { verse: "Rom 15:20", text: "It has always been my ambition to preach the gospel where Christ was not known, so that I would not be building on someone else's foundation." },
];

const videos = [
  { id: "2Zr-qFsNQMk", title: "The Theology of Church Planting" },
  { id: "xPKf3iNjFgE", title: "Contextualization and the Gospel" },
  { id: "a5g9_SjNqkw", title: "Incarnational Church Planting" },
  { id: "SsAfmCrMaOs", title: "Building a Core Team Before You Launch" },
];

type CPEntry = { id: string; date: string; context: string; step: string; obstacle: string };

export default function ChurchPlantingPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CPEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_churchplanting_entries") ?? "[]"); } catch { return []; }
  });
  const [jContext, setJContext] = useState("");
  const [jStep, setJStep] = useState("");
  const [jObstacle, setJObstacle] = useState("");

  useEffect(() => { localStorage.setItem("vine_churchplanting_entries", JSON.stringify(entries)); }, [entries]);

  const saveEntry = () => {
    if (!jContext.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), context: jContext, step: jStep, obstacle: jObstacle }, ...prev]);
    setJContext(""); setJStep(""); setJObstacle("");
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
        <div style={{ marginBottom: "0.4rem", fontSize: "0.78rem", color: MUTED, letterSpacing: "0.08em", textTransform: "uppercase" }}>Ministry &amp; Mission</div>
        <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)", fontWeight: 700, marginBottom: "0.5rem" }}>Church Planting</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>The theology, strategy, and call to plant — from the apostolic mandate in Acts to the incarnational model of presence before program.</p>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ padding: "6px 16px", borderRadius: 6, border: `1px solid ${tab === t.id ? GREEN : BORDER}`, background: tab === t.id ? GREEN + "22" : "transparent", color: tab === t.id ? GREEN : MUTED, cursor: "pointer", fontSize: "0.85rem", fontWeight: tab === t.id ? 600 : 400 }}>{t.label}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.4rem" }}>
                <div style={{ fontSize: "0.78rem", color: GREEN, fontWeight: 600, marginBottom: 6, letterSpacing: "0.04em" }}>{item.verse}</div>
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
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.3rem" }}>{p.icon}</span>
                  <h3 style={{ fontWeight: 700, fontSize: "0.95rem" }}>{p.title}</h3>
                </div>
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
                <div style={{ fontSize: "0.8rem", color: GREEN, marginBottom: 12 }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: 14, color: TEXT, fontStyle: "italic", marginBottom: 12, lineHeight: 1.6 }}>&ldquo;{v.quote}&rdquo;</blockquote>
                <p style={{ color: MUTED, fontSize: "0.88rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "1.1rem 1.3rem" }}>
                <div style={{ fontWeight: 700, color: GREEN, marginBottom: 6 }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.65 }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "0.5rem", fontWeight: 700 }}>Reflect on Your Planting Call</h3>
            <p style={{ color: MUTED, fontSize: "0.88rem", marginBottom: "1.2rem" }}>Use these prompts to think honestly and prayerfully about your call to plant and where God is leading you.</p>
            {[
              { label: "Context — the context you sense called to: neighborhood, people group, or city", val: jContext, set: setJContext },
              { label: "Step — a specific step you are taking toward planting", val: jStep, set: setJStep },
              { label: "Obstacle — what is currently in the way", val: jObstacle, set: setJObstacle },
            ].map((f, i) => (
              <div key={i} style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: 6, fontSize: "0.88rem", color: MUTED }}>{f.label}</label>
                <textarea value={f.val} onChange={e => f.set(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.7rem", color: TEXT, fontSize: "0.9rem", resize: "vertical" }} />
              </div>
            ))}
            <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 6, padding: "0.6rem 1.4rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            {entries.length > 0 && (
              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ marginBottom: "1rem", fontWeight: 600, color: GREEN }}>My Entries ({entries.length})</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {entries.map(e => (
                    <div key={e.id} style={{ background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, padding: "0.9rem 1rem" }}>
                      <div style={{ fontSize: "0.78rem", color: MUTED, marginBottom: 6 }}>{e.date}</div>
                      <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: GREEN, fontWeight: 600 }}>Context:</span> {e.context}</p>
                      {e.step && <p style={{ fontSize: "0.88rem", color: TEXT, marginBottom: 4 }}><span style={{ color: GREEN, fontWeight: 600 }}>Step:</span> {e.step}</p>}
                      {e.obstacle && <p style={{ fontSize: "0.88rem", color: TEXT }}><span style={{ color: GREEN, fontWeight: 600 }}>Obstacle:</span> {e.obstacle}</p>}
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
                <h3 style={{ marginBottom: 10, fontWeight: 600, fontSize: "0.95rem", color: GREEN }}>{v.title}</h3>
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
