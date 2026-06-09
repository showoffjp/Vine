"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "God Does Not Abandon in Old Age", verse: "Isaiah 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you. This promise is specific to old age — not generic comfort, but explicit divine commitment that the covenant relationship does not diminish with the years. God made you. God carries you now. The question is never whether God is still present in late life — the question is whether we are still paying attention to His presence." },
  { title: "Gray Hair Is a Crown — Not a Liability", verse: "Proverbs 16:31", text: "Gray hair is a crown of splendor; it is attained in the way of righteousness. Our culture treats aging as decline. The Bible treats it as attainment — a crown earned through years of walking with God, through losses endured and faithfulness maintained. The elderly person in the pew carries something that younger believers cannot replicate: the testimony of a life actually lived with God over decades. This is not nothing. It is something the church desperately needs." },
  { title: "Loneliness Is a Wound — Not a Spiritual Failure", verse: "Psalm 25:16", text: "Turn to me and be gracious to me, for I am lonely and afflicted. The psalmist brought loneliness directly to God as a named complaint. Many elderly Christians carry enormous shame about loneliness — as though being alone in their later years means they failed at relationship, or that their faith should make them sufficient unto themselves. Neither is true. Loneliness is a wound. God knows the wound. Bringing it honestly to him is the right response." },
  { title: "Elders Are Irreplaceable in the Body", verse: "1 Corinthians 12:22", text: "On the contrary, those parts of the body that seem to be weaker are indispensable. The theological language of the body of Christ applies specifically to those who seem weaker, less visible, less productive. An elderly person who can no longer drive, volunteer, or serve in visible ways is not less part of the body — they are indispensable to it in ways the body may not fully understand. The church diminishes itself when it fails to integrate its elderly members." },
  { title: "Prayer Is Not a Consolation Prize — It Is High Calling", verse: "Luke 2:37", text: "Anna never left the temple but worshiped night and day, fasting and praying. Anna was elderly. She could not do what the apostles did. What she could do — and did relentlessly — was pray and be present in the house of God. The narrative honors this absolutely. Many elderly Christians who can no longer travel, serve, or lead can pray at a depth and with a faithfulness that younger, busier people cannot sustain. This is high calling, not consolation." },
];

const voices = [
  { id: "hn", name: "Henri Nouwen", role: "Author, Aging: The Fulfillment of Life", quote: "For many people, growing old means growing away from what they consider important and worthwhile. But when we dare to see the elderly as those who know through years of living what is truly essential, we will discover that aging is not the opposite of life but its culmination.", bio: "Nouwen and Walter Gaffney's Aging: The Fulfillment of Life remains one of the most theologically rich treatments of late life, honoring the elderly as carriers of wisdom and models of a different kind of strength — the strength of people who have been stripped of illusions." },
  { id: "dd", name: "Daniel Doriani", role: "Theologian, Author", quote: "The church owes the elderly the same engagement it gives the young — not programs aimed at keeping them occupied, but genuine integration into the body's life, with the recognition that what they carry from decades of faith is irreplaceable.", bio: "Doriani's theological work on vocation, community, and the stages of life addresses the way the church has often treated the elderly as a demographic to manage rather than a gift to receive. He calls for genuine multigenerational integration." },
  { id: "sk", name: "Susan Pinker", role: "Developmental Psychologist, The Village Effect", quote: "The single most powerful predictor of longevity is not diet, exercise, or genetics. It is the quality of close relationships. The crisis of elderly loneliness is not a personal failing — it is a crisis of community architecture.", bio: "Pinker's research on the role of close relationships in health and longevity provides the scientific context for understanding why church community for the elderly is not merely spiritually important but literally life-giving." },
];

const practices = [
  { icon: "📞", title: "Do Not Wait for Someone to Notice — Reach Out", text: "One of the cruelest features of elderly loneliness is the self-silencing that accompanies it — the sense that reaching out is a burden, that people are busy, that nobody really wants to hear from you. This is usually false, but isolation makes it feel true. Challenge the belief by reaching out: call a former friend, contact your church's pastoral care team, reach out to a neighbor. Initiation is the most powerful antidote to isolation." },
  { icon: "⛪", title: "Tell Your Church You Are Lonely", text: "Most churches have pastoral care structures, visitation ministries, or deacon programs designed for exactly this. But they often work by response rather than surveillance — they need to know who is struggling. If you have not told your church that you are lonely, tell them. Contact a pastor, a deacon, or the church office. You are not being a burden. You are giving the church an opportunity to be the church." },
  { icon: "🧑‍🤝‍🧑", title: "Seek Intergenerational Connection", text: "Friendships with people across age differences can be particularly sustaining in later life. Many younger people are actively looking for mentors, for wisdom, for people who have lived through what they are facing. Consider whether your church, neighborhood, or community has structures for this kind of connection — or whether you could initiate it. You have something to offer that no amount of money can purchase." },
  { icon: "📺", title: "Use Technology Intentionally, Not as Substitute", text: "Video calling, social media, and online communities can provide genuine connection for those with mobility limitations. But technology used as a complete substitute for in-person relationship often deepens loneliness rather than relieving it. Use it as a bridge: to stay connected with family across distances, to participate in online church communities, to maintain relationships with friends who have moved. But also keep pushing toward embodied presence wherever possible." },
  { icon: "🙏", title: "Invest Deliberately in Prayer for Others", text: "When physical capacity diminishes, the prayer life can expand to fill it — not as a consolation but as a genuine ministry. Consider keeping a prayer list of people you are regularly interceding for. Tell people you are praying for them; this simple act builds connection and communicates care. Your prayers are not small things. They may be among the most powerful contributions you are making to the lives of people who do not know they are being held." },
];

const scriptures = [
  { verse: "Isaiah 46:4", text: "Even to your old age and gray hairs I am he, I am he who will sustain you. I have made you and I will carry you; I will sustain you and I will rescue you." },
  { verse: "Psalm 71:9", text: "Do not cast me away when I am old; do not forsake me when my strength is gone." },
  { verse: "Titus 2:3-4", text: "Likewise, teach the older women to be reverent in the way they live, not to be slanderers or addicted to much wine, but to teach what is good. Then they can urge the younger women..." },
  { verse: "Proverbs 16:31", text: "Gray hair is a crown of splendor; it is attained in the way of righteousness." },
  { verse: "Psalm 92:14", text: "They will still bear fruit in old age, they will stay fresh and green." },
  { verse: "2 Corinthians 4:16", text: "Therefore we do not lose heart. Though outwardly we are wasting away, yet inwardly we are being renewed day by day." },
];

type SLEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function SeniorLonelinessPage() {
  const [tab, setTab] = useState("theology");
  const [slJournal, setSlJournal] = useState<SLEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_seniorlonelinessj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_seniorlonelinessj_entries", JSON.stringify(slJournal)); } catch {}
  }, [slJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setSlJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setSlJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Aging & Community</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Loneliness in Later Life</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          The specific loneliness of aging — and how faith, community, and God's covenant faithfulness speak to it.
        </p>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>
              {t}
            </button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {voices.map((v) => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontWeight: 700 }}>{v.name}</div>
                <div style={{ fontSize: "0.8rem", color: PURPLE, marginBottom: "0.75rem" }}>{v.role}</div>
                <blockquote style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", marginBottom: "0.75rem" }}>{v.quote}</blockquote>
                <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ fontSize: "0.85rem", color: PURPLE, fontWeight: 600, marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Reflection Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>Where am I feeling lonely or unseen right now?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What do I know about God's faithfulness from my years of walking with Him?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One step toward connection today</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {slJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {slJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Loneliness: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Faithfulness: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Step: </span>{entry.step}</p>}
                    <button onClick={() => deleteEntry(entry.id)} style={{ marginTop: "0.75rem", background: "transparent", border: `1px solid ${BORDER}`, color: MUTED, borderRadius: 6, padding: "0.25rem 0.75rem", cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { videoId: "GGCF3OPWN14", title: "The Upside Down Kingdom — Community and Loneliness", channel: "Tim Keller / The Gospel Coalition", description: "Keller explores how the Kingdom of God inverts the world's answers to loneliness and offers genuine community — particularly relevant for older believers experiencing social isolation." },
              { videoId: "7KMPN9OLoNo", title: "Joni Eareckson Tada on Suffering and Presence", channel: "Desiring God", description: "Joni speaks about what she has learned of God's presence through decades of isolation and physical limitation — offering hope grounded in the sovereignty and nearness of God." },
              { videoId: "t6L-F2emwUc", title: "The Joy That Produces Radical Obedience", channel: "Desiring God", description: "John Piper on how joy in God — not social connection — is the bedrock of a flourishing life, and what that means for older Christians navigating the loneliness of late life." },
              { videoId: "oNpTha80yyE", title: "The Sovereignty of God Over Every Season", channel: "Ligonier Ministries / R.C. Sproul", description: "Sproul on the sovereignty of God over every season of life — including the season of aging, social diminishment, and the loneliness that many older believers face." },
            ].map(v => (
              <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <VideoEmbed videoId={v.videoId} title={v.title} />
                <div style={{ padding: "14px 16px" }}>
                  <h4 style={{ color: PURPLE, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
                  <p style={{ color: MUTED, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem" }}>{v.channel}</p>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
      <Footer />
    </>
  );
}
