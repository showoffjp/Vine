"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", INDIGO = "#6366F1", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Death Is Real — But Christ Has Robbed It of Its Sting", verse: "1 Corinthians 15:55-57", text: "Where, O death, is your victory? Where, O death, is your sting? The sting of death is sin, and the power of sin is the law. But thanks be to God! He gives us the victory through our Lord Jesus Christ. Paul does not minimize death or pretend it is merely a transition. He calls it an enemy — the last enemy to be destroyed. But the resurrection of Jesus has fundamentally changed the calculus. Death still occurs; its sting — the penalty of sin, the separation from God — has been removed. The Christian does not face death as one who has lost, but as one who has already been given the victory by another." },
  { title: "The Fear of Death Is Natural — Jesus Felt It in Gethsemane", verse: "Hebrews 2:14-15", text: "Since the children have flesh and blood, he too shared in their humanity so that by his death he might break the power of him who holds the power of death — that is, the devil — and free those who all their life were held in slavery by their fear of death. The author of Hebrews is explicit: the fear of death is a form of slavery that has held humanity captive from the beginning. Jesus entered fully into this human condition — the sweat like blood in Gethsemane, the cry of dereliction — precisely so that his victory over death would be a victory won from inside the human predicament, not from a safe distance outside it. He is not a high priest who cannot sympathize." },
  { title: "Heaven Is Not Just Avoiding Hell — It Is Being With Christ", verse: "Philippians 1:21-23", text: "For to me, to live is Christ and to die is gain. If I am to go on living in the body, this will mean fruitful labor for me. Yet what shall I choose? I do not know! I am torn between the two: I desire to depart and be with Christ, which is better by far. Paul's theology of death is strikingly personal: death is gain not primarily because of what one escapes but because of who one is with. The destination is not a place but a person — 'to be with Christ.' The Christian transformation of the fear of death does not depend on certainty about the topography of heaven. It depends on the personal relationship with Jesus that death does not end but perfects." },
  { title: "The Christian Approach to Death Is Preparation, Not Avoidance", verse: "Psalm 90:12", text: "Teach us to number our days, that we may gain a heart of wisdom. Moses's prayer is one of the most counter-cultural prayers in the Psalter. He asks God to teach Israel to live with the awareness of mortality — to number their days, not pretend they are infinite. The wisdom that comes from numbering days is not morbidity but clarity: about what matters, what doesn't, what to invest in, what to let go. The Christian tradition at its best has always understood that those who have made peace with their mortality live better, love more freely, and work with less self-deception than those who live in denial of it." },
  { title: "The Resurrection Body Changes Everything About How We Face Death", verse: "1 Corinthians 15:42-44", text: "So will it be with the resurrection of the dead. The body that is sown is perishable, it is raised imperishable; it is sown in dishonor, it is raised in glory; it is sown in weakness, it is raised in power; it is sown a natural body, it is raised a spiritual body. Paul's four contrasts — perishable/imperishable, dishonor/glory, weakness/power, natural/spiritual — are not abstract dogma. They are the theological ground for facing death without despair. We are not souls escaping bodies. We are embodied persons whose bodies will be transformed, not abandoned. The resurrection hope is not ghostly immortality but the redemption of the whole person — the full restoration of everything death takes from us." },
];

const practices = [
  { icon: "📝", title: "Write Your Own Funeral Sermon — Meditate on What You Want Said", text: "One of the most clarifying exercises in the Christian tradition is writing your own funeral sermon — or at least the outline of it. What do you want said? What do you want to have been true of your life? Who do you want to have become? This is not morbidity but the highest form of intentional living. The person who has written their own funeral sermon is rarely the person who wastes their life on what doesn't matter. Start with: what do I want people to say about how I lived? Then work backward from that conclusion." },
  { icon: "🕯️", title: "Practice the Art of Dying Well: Ars Moriendi", text: "The medieval Ars Moriendi — the art of dying well — was a practical Christian manual for preparing for death, both one's own and that of loved ones. It addressed the temptations that come at the end of life: despair over sins, impatience with suffering, spiritual pride, attachment to people and possessions, and loss of faith. Recovering this tradition means asking regularly: am I prepared to die well? Have I confessed what needs to be confessed? Have I forgiven who needs to be forgiven? Have I said what needs to be said? Dying well is a discipline, not an accident." },
  { icon: "✝️", title: "Memorize Scripture About Resurrection and Eternal Life", text: "The final hours of life are not the best time to begin learning the promises of God. The Christian who has hidden God's word in their heart over decades has reserves to draw on when they need them most. Commit to memory: John 11:25-26, Romans 8:38-39, 1 Corinthians 15:55-57, Philippians 1:21, Psalm 23:4, Revelation 21:4, 2 Corinthians 5:1. These are not decorative. They are the weapons Scripture says we need when facing the last enemy. Build the reserves now, in health, so they are available in weakness." },
  { icon: "🤝", title: "Talk About Death With Your Loved Ones — Don't Leave It Unsaid", text: "One of the most loving things a Christian can do for their family is to have the conversations about death while there is time to have them well. What are your wishes? What have you prepared legally and practically? What do you want them to know about your faith and hope? What do you need to say before it is too late? The families who have had these conversations grieve differently than those who haven't — not without grief, but with less unfinished business, less guilt, less regret. Don't leave the most important things unsaid because the conversation felt uncomfortable." },
  { icon: "🙏", title: "Pray Daily for a Good Death — As Christians Have Always Done", text: "The traditional Christian prayer for a good death — 'grant me, O Lord, a holy and peaceful death' — has nearly disappeared from Protestant practice. But the church prayed this way for centuries, and for good reason: dying well is not automatic, and preparing for it spiritually is the work of a lifetime. Pray not just for length of life but for quality of death — that when the time comes, you will die with faith intact, with relationships reconciled, with the name of Jesus on your lips. This prayer shapes the life that makes such a death possible." },
];

const voices = [
  { id: "ntw", name: "N.T. Wright", role: "Author, \"Surprised by Hope\" — resurrection scholar", quote: "The message of the resurrection is not that we go to heaven when we die and that's the end of it. The New Testament picture is much more robust: God intends to renew the entire creation, and the resurrection of Jesus is the beginning of that project. Death is real — we must not minimize it — but the resurrection has put a flag in the ground on the far side of it. The Christian hope is not escape from the world but the transformation of it, beginning with the body that is sown perishable and raised imperishable.", bio: "Wright's Surprised by Hope is the most important evangelical restatement of resurrection hope in a generation. He argues that most Western Christianity has accepted a Platonic view of death — souls escaping bodies to a timeless heaven — rather than the New Testament view of bodily resurrection into a renewed creation. His work restores the full-bodied hope that makes death genuinely answerable rather than merely deferrable." },
  { id: "tk", name: "Timothy Keller", role: "Author, \"On Death\" — pastoral theologian", quote: "The resurrection of Jesus does not deny the reality of death or the grief of those who mourn. It does something more profound: it gives death a context that changes everything. If Jesus rose bodily from the dead, then death is not the end of the story — not of his story, and not of ours. The grief is real; the hope is also real. And because the hope is grounded in a historical event, not in wishful thinking, it is a hope that can be held in the same hand as honest grief.", bio: "Keller's slim volume On Death, written as he faced his own terminal diagnosis, is a pastoral and personal treatment of the Christian hope in the face of mortality. Written with his characteristic clarity and theological depth, it models what it looks like to hold genuine grief and genuine hope together — not as competing emotions but as the double response of a person who takes both the reality of death and the reality of the resurrection with full seriousness." },
  { id: "dw", name: "Dallas Willard", role: "Philosopher and spiritual formation teacher", quote: "I am thoroughly convinced that when I die, it will be the greatest adventure I have ever undertaken. I have no fear of death — not because I am brave, but because I know who will be there. Death is not a wall; it is a door. And I know the one who opened it.", bio: "Willard's famous statement about death as adventure reflects a lifetime of spiritual formation in the reality of God's presence. For Willard, the fear of death was not conquered by argument but by the progressive deepening of a relationship with God that made the transition from this life to the next continuous rather than catastrophic. His teaching on spiritual formation is the most substantive account of how a person actually gets to the place where death is more anticipated than feared." },
];

const scriptures = [
  { verse: "1 Corinthians 15:55-57", text: "Where, O death, is your victory? Where, O death, is your sting? The sting of death is sin, and the power of sin is the law. But thanks be to God! He gives us the victory through our Lord Jesus Christ." },
  { verse: "Philippians 1:21", text: "For to me, to live is Christ and to die is gain." },
  { verse: "Hebrews 2:14-15", text: "Since the children have flesh and blood, he too shared in their humanity so that by his death he might break the power of him who holds the power of death — that is, the devil — and free those who all their life were held in slavery by their fear of death." },
  { verse: "Psalm 23:4", text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me." },
  { verse: "Revelation 21:4", text: "He will wipe every tear from their eyes. There will be no more death or mourning or crying or pain, for the old order of things has passed away." },
  { verse: "2 Corinthians 5:1-4", text: "For we know that if the earthly tent we live in is destroyed, we have a building from God, an eternal house in heaven, not built by human hands. Meanwhile we groan, longing to be clothed instead with our heavenly dwelling." },
];

type FDEntry = { id: string; date: string; fear: string; truth: string; preparation: string };

export default function FearOfDeathPage() {
  const [tab, setTab] = useState("theology");
  const [fdJournal, setFdJournal] = useState<FDEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_fearofdeath_entries") ?? "[]"); } catch { return []; }
  });
  const [jFear, setJFear] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jPreparation, setJPreparation] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_fearofdeath_entries", JSON.stringify(fdJournal)); } catch {}
  }, [fdJournal]);

  function saveEntry() {
    if (!jFear.trim() && !jTruth.trim()) return;
    setFdJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), fear: jFear, truth: jTruth, preparation: jPreparation }, ...prev]);
    setJFear(""); setJTruth(""); setJPreparation("");
  }
  function deleteEntry(id: string) { setFdJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "practices", "voices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
      <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", paddingTop: "var(--header-height, 80px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", padding: "2rem 1rem" }}>
          <div style={{ marginBottom: "0.5rem", fontSize: "0.8rem", color: MUTED }}>Suffering &amp; Hope</div>
          <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Fear of Death</h1>
          <p style={{ color: MUTED, marginBottom: "1.5rem", lineHeight: 1.6 }}>
            The Christian approach to mortality — the resurrection hope that transforms fear into freedom, the ancient wisdom of dying well, and the preparation that lets us live without the shadow of the last enemy.
          </p>

          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
            {tabs.map(t => (
              <button key={t} onClick={() => setTab(t)} style={{ padding: "0.4rem 1rem", borderRadius: 20, border: "none", cursor: "pointer", background: tab === t ? INDIGO : CARD, color: TEXT, fontWeight: tab === t ? 700 : 400, fontSize: "0.85rem" }}>{t.charAt(0).toUpperCase() + t.slice(1)}</button>
            ))}
          </div>

          {tab === "theology" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {theology.map((t, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: INDIGO, fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.25rem" }}>{t.verse}</div>
                  <h3 style={{ margin: "0 0 0.5rem", fontSize: "1rem" }}>{t.title}</h3>
                  <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{t.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "practices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {practices.map((p, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", display: "flex", gap: "1rem" }}>
                  <div style={{ fontSize: "1.5rem", flexShrink: 0 }}>{p.icon}</div>
                  <div>
                    <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.95rem" }}>{p.title}</h3>
                    <p style={{ color: MUTED, fontSize: "0.9rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "voices" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {voices.map(v => (
                <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ fontWeight: 700, marginBottom: "0.15rem" }}>{v.name}</div>
                  <div style={{ color: INDIGO, fontSize: "0.8rem", marginBottom: "0.75rem" }}>{v.role}</div>
                  <blockquote style={{ borderLeft: `3px solid ${INDIGO}`, margin: "0 0 0.75rem", paddingLeft: "0.75rem", color: TEXT, fontStyle: "italic", fontSize: "0.9rem", lineHeight: 1.6 }}>{v.quote}</blockquote>
                  <p style={{ color: MUTED, fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "scripture" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {scriptures.map((s, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                  <div style={{ color: INDIGO, fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                  <p style={{ color: TEXT, fontSize: "0.95rem", lineHeight: 1.7, margin: 0, fontStyle: "italic" }}>{s.text}</p>
                </div>
              ))}
            </div>
          )}

          {tab === "journal" && (
            <div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <h3 style={{ margin: "0 0 1rem", fontSize: "1rem" }}>Mortality Journal</h3>
                <textarea placeholder="What specifically do I fear about death or dying?" value={jFear} onChange={e => setJFear(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What does the resurrection promise in response to that specific fear?" value={jTruth} onChange={e => setJTruth(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.5rem", resize: "vertical", boxSizing: "border-box" }} />
                <textarea placeholder="What preparation (spiritual, relational, practical) do I want to make now?" value={jPreparation} onChange={e => setJPreparation(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, color: TEXT, borderRadius: 6, padding: "0.5rem", fontSize: "0.9rem", marginBottom: "0.75rem", resize: "vertical", boxSizing: "border-box" }} />
                <button onClick={saveEntry} style={{ background: INDIGO, color: TEXT, border: "none", borderRadius: 6, padding: "0.5rem 1.25rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
              </div>
              {fdJournal.length === 0 ? <p style={{ color: MUTED, fontSize: "0.9rem" }}>No entries yet.</p> : fdJournal.map(e => (
                <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1rem", marginBottom: "0.75rem" }}>
                  <div style={{ fontSize: "0.75rem", color: MUTED, marginBottom: "0.5rem" }}>{e.date}</div>
                  {e.fear && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>My fear:</strong> {e.fear}</p>}
                  {e.truth && <p style={{ margin: "0 0 0.25rem", fontSize: "0.9rem" }}><strong>Resurrection promise:</strong> {e.truth}</p>}
                  {e.preparation && <p style={{ margin: 0, fontSize: "0.9rem" }}><strong>Preparation:</strong> {e.preparation}</p>}
                  <button onClick={() => deleteEntry(e.id)} style={{ marginTop: "0.5rem", background: "none", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {[
                { videoId: "WGFdP-12HHw", title: "Surprised by Hope — N.T. Wright on Resurrection", channel: "N.T. Wright Online", description: "Wright on why the New Testament hope is not souls escaping to a timeless heaven but bodily resurrection into a renewed creation — and why this distinction matters enormously for how Christians face death." },
                { videoId: "z1rFbvLrRFE", title: "Tim Keller on Death and the Christian Hope", channel: "The Gospel Coalition", description: "Keller on the pastoral and theological resources Christians have for facing death — drawn from his own experience of terminal illness and a lifetime of preaching the resurrection." },
                { videoId: "4eTpAe80K3E", title: "Dying Well: The Christian Art of Ars Moriendi", channel: "Ligonier Ministries", description: "On the ancient Christian tradition of preparing for death — what the church historically taught about dying well, and how to recover that wisdom for contemporary disciples." },
                { videoId: "JGnpYVKGh4Q", title: "What Happens When We Die — A Biblical Answer", channel: "Desiring God", description: "A thorough biblical survey of what Scripture actually teaches about death, the intermediate state, and the final resurrection — giving confidence to those who face their own mortality or the death of loved ones." },
              ].map(v => (
                <div key={v.videoId} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "14px 16px" }}>
                    <h4 style={{ color: INDIGO, fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{v.title}</h4>
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
