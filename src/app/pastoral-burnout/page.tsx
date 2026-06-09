"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  { title: "Elijah Was a Minister Who Hit the Wall", verse: "1 Kings 19:4", text: "He came to a broom bush, sat down under it and prayed that he might die. I have had enough, Lord. Elijah was not an ordinary sufferer — he was one of the most dramatic prophets in Scripture, who had just called down fire from heaven. And he hit the wall so hard he wanted to die. The fact that this story is in Scripture — God's response to a burned-out minister, not a rebuke but bread and rest — gives pastoral burnout a theological category. It belongs in the Story. The minister who has had enough is not spiritually defective. They are in good company." },
  { title: "You Cannot Give What You Do Not Have", verse: "Luke 10:27", text: "Love the Lord your God with all your heart and with all your soul and with all your strength and with all your mind; and love your neighbor as yourself. The great commandment includes the self. Many ministers have been trained that self-care is selfishness, that ministry means pouring out without refilling, that the call obliterates the person. But the love-your-neighbor command has a self embedded in it. The minister who has no soul left to give is not serving from abundance — they are serving from debt, and eventually the debt collector comes." },
  { title: "Identity Must Be Rooted Below the Work', verse: 'Matthew 3:17", text: "And a voice from heaven said, 'This is my Son, whom I love; with him I am well pleased.' This declaration came before Jesus's public ministry began — before a single sermon, a single healing, a single confrontation. It was spoken over who he was, not what he had accomplished. Pastoral burnout is often rooted in an identity built on ministry performance rather than on the love of the Father. When ministry stops going well — when the church shrinks, the criticism increases, the vision stalls — a performance-based identity collapses. The only identity that survives the collapse is the one given before any of the work began." },
  { title: "The Body of Christ Was Designed for Mutual Support', verse: 'Galatians 6:2", text: "Carry each other's burdens, and in this way you will fulfill the law of Christ. Pastoral isolation is one of the most consistent predictors of burnout. Many pastors have no one to confess to, no one who knows the real cost of the work, no one who provides genuine accountability and care. The culture of pastoral invulnerability — projecting strength to protect the congregation — destroys pastors. Genuine pastor care requires other pastors who can carry each other's burdens, which requires the vulnerability that the cultural role has systematically suppressed." },
  { title: "Leaving Ministry Is Not Apostasy", verse: "Mark 6:31", text: "Come with me by yourselves to a quiet place and get some rest. Jesus took his disciples away from ministry into rest — consistently, intentionally. There are seasons when the only faithful response to pastoral burnout is to leave ministry for a period of genuine recovery. Not every pastor who steps away comes back. Some find that ministry was not their calling but their need. Some return with the wisdom that required the break to acquire. Leaving is not failure. Sometimes it is the only honest thing to do." },
];

const voices = [
  { id: "ak", name: "Andrew Arndt", role: "Author, Streams in the Wasteland", quote: "Burnout in ministry is not primarily about working too hard. It is about working from a depleted source — from obligation, fear, or the need to be needed — rather than from overflow. The desert fathers called this acedia. We call it burnout. The name is less important than the recognition that the solution is not less work but a different source.", bio: "Arndt's Streams in the Wasteland draws on the desert fathers and contemplative tradition to address pastoral depletion and the path back to ministry from a place of genuine spiritual formation. It is one of the most useful resources for pastors navigating burnout." },
  { id: "cp", name: "Chuck DeGroat", role: "Psychologist, Professor, Author of When Narcissism Comes to Church", quote: "Most pastoral burnout is not primarily about workload. It is about what is happening inside the pastor — the unexamined wounds, the performance identity, the need to be seen as strong. Addressing the external situation without addressing those internal dynamics produces temporary relief at best.", bio: "DeGroat's work on pastoral psychology, narcissism in ministry leadership, and the inner life of pastors is among the most important available. His clinical background combined with theological depth makes him uniquely equipped to address the complex internal dynamics of pastoral burnout." },
  { id: "pm", name: "Peter Scazzero", role: "Author, Emotionally Healthy Spirituality", quote: "We expect pastors to care for people at the deepest levels while carrying wounds they have never acknowledged, processed, or healed. The result is predictable and tragic: pastors who are spiritually performing while slowly dying inside.", bio: "Scazzero's Emotionally Healthy Spirituality and its companion resources address the systematic underdevelopment of emotional maturity in Christian ministry contexts. His work has helped thousands of pastors and ministry leaders begin the work of genuine inner healing." },
];

const practices = [
  { icon: "🗣️", title: "Get Your Own Therapist or Spiritual Director — Now", text: "Most pastors provide pastoral care to others without receiving equivalent care themselves. A therapist who understands ministry culture and a spiritual director who can accompany the inner life are not luxuries for pastors in crisis — they are standard maintenance for anyone doing the work of ministry over time. If you wait until you are in crisis to seek these relationships, the damage will already be significant. The time to establish these relationships is before you need them." },
  { icon: "🤝", title: "Find or Build a Peer Group of Pastors", text: "Pastoral isolation is the default state for most ministers, and it is lethal. A genuine peer group — other pastors who meet regularly, practice mutual accountability, pray for each other, and can be honest about the real cost of ministry — is not optional. Look for existing networks (Acts 29, denominational cohorts, Leadership Network peer groups). If you cannot find one, build one with two or three other pastors willing to be genuinely vulnerable." },
  { icon: "📅", title: "Protect Your Sabbath as Non-Negotiable", text: "Many pastors are worst at Sabbath. The pressures of weekend ministry push rest to Monday; Monday gets filled with recovery from Sunday; the week begins before recovery has occurred. A genuine Sabbath — a full day of rest, not productivity — is not optional for sustainable ministry. It requires structural support (the church needs to understand the pastor takes Sabbath seriously), and it requires the pastor's own theological conviction that this day belongs to God, not to the church." },
  { icon: "📋", title: "Assess What You Are Carrying That Is Not Yours to Carry", text: "Pastoral burnout is often partly caused by carrying responsibility that belongs to elders, to staff, to the congregation, or to God. A leadership audit — what am I actually responsible for versus what I have taken on — often reveals that the pastor has assumed responsibilities that are not theirs. This is partly cultural (the senior pastor-as-CEO model loads one person with the weight of an entire organization), partly character (the driven, conscientious person who finds it easier to carry than to delegate), and partly theological (an inadequate theology of the church as body). The audit is uncomfortable but necessary." },
  { icon: "🏥", title: "Consider a Sabbatical Before You Collapse", text: "Planned sabbaticals — intentional periods of extended rest, study, and renewal — are increasingly understood as standard maintenance for pastoral health, not a reward for suffering. Many denominations and churches have sabbatical policies. If yours doesn't, the Lilly Endowment Clergy Renewal Program (lillyendowment.org) provides sabbatical grants. The pastor who plans a sabbatical while they still have the capacity to enjoy it is far better served than the pastor who is forced into extended leave by collapse." },
];

const scriptures = [
  { verse: "1 Kings 19:4", text: "He came to a broom bush, sat down under it and prayed that he might die. 'I have had enough, Lord,' he said." },
  { verse: "2 Corinthians 4:7-8", text: "But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us. We are hard pressed on every side, but not crushed; perplexed, but not in despair." },
  { verse: "Matthew 11:28-30", text: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light." },
  { verse: "Mark 6:31", text: "Then, because so many people were coming and going that they did not even have a chance to eat, he said to them, 'Come with me by yourselves to a quiet place and get some rest.'" },
  { verse: "Galatians 1:10", text: "Am I now trying to win the approval of human beings, or of God? Or am I trying to please people? If I were still trying to please people, I would not be a servant of Christ." },
  { verse: "Matthew 3:17", text: "And a voice from heaven said, 'This is my Son, whom I love; with him I am well pleased.'" },
];

type PBEntry = { id: string; date: string; feeling: string; truth: string; step: string };

export default function PastoralBurnoutPage() {
  const [tab, setTab] = useState("theology");
  const [pbJournal, setPbJournal] = useState<PBEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("vine_pastoralburnoutj_entries") ?? "[]"); } catch { return []; }
  });
  const [jFeeling, setJFeeling] = useState("");
  const [jTruth, setJTruth] = useState("");
  const [jStep, setJStep] = useState("");

  useEffect(() => {
    try { localStorage.setItem("vine_pastoralburnoutj_entries", JSON.stringify(pbJournal)); } catch {}
  }, [pbJournal]);

  function saveEntry() {
    if (!jFeeling.trim() && !jTruth.trim()) return;
    setPbJournal(prev => [{ id: Date.now().toString(), date: new Date().toLocaleDateString(), feeling: jFeeling, truth: jTruth, step: jStep }, ...prev]);
    setJFeeling(""); setJTruth(""); setJStep("");
  }

  function deleteEntry(id: string) { setPbJournal(prev => prev.filter(e => e.id !== id)); }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "system-ui, sans-serif", padding: "2rem 1rem" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ marginBottom: "0.5rem", fontSize: "0.85rem", color: MUTED }}>Ministry & Wellbeing</div>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Pastoral Burnout</h1>
        <p style={{ color: MUTED, marginBottom: "2rem", lineHeight: 1.6 }}>
          For pastors, ministers, and ministry leaders who have hit the wall — and the path back to sustainable, rooted ministry.
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
              <h3 style={{ fontWeight: 700, marginBottom: "1rem" }}>Pastor Journal</h3>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What is the honest state of my soul in ministry right now?</label>
                <textarea value={jFeeling} onChange={e => setJFeeling(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "0.75rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>What does God say about me below and beneath my ministry role?</label>
                <textarea value={jTruth} onChange={e => setJTruth(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 80, boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "0.85rem", color: MUTED, display: "block", marginBottom: "0.25rem" }}>One structural change I need to make for sustainable ministry</label>
                <textarea value={jStep} onChange={e => setJStep(e.target.value)} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", minHeight: 60, boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.6rem 1.5rem", cursor: "pointer", fontWeight: 600 }}>Save Entry</button>
            </div>
            {pbJournal.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {pbJournal.map(entry => (
                  <div key={entry.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.5rem" }}>{entry.date}</div>
                    {entry.feeling && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Soul state: </span>{entry.feeling}</p>}
                    {entry.truth && <p style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Identity: </span>{entry.truth}</p>}
                    {entry.step && <p style={{ fontSize: "0.9rem" }}><span style={{ color: PURPLE }}>Change: </span>{entry.step}</p>}
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
              { videoId: "eBl7gT7gQ6g", title: "Emotionally Healthy Spirituality — Peter Scazzero", channel: "Emotionally Healthy Discipleship", description: "Scazzero on why emotional health and spiritual maturity are inseparable — and why ministry that flows from an emotionally immature and disconnected place inevitably produces burnout." },
              { videoId: "DFApBaFl5hM", title: "Ministry Burnout: Causes and Cures", channel: "The Gospel Coalition", description: "A panel discussion on the causes of ministry burnout — theological, psychological, and structural — and what genuine recovery looks like for pastors and church workers." },
              { videoId: "G5gLrHClpKQ", title: "Rest Is a Weapon: A Theology of Margin", channel: "Desiring God", description: "A theological case for building margin into ministry life — why rest is not laziness but an act of faith in the God who does not need your exhausted over-giving to accomplish his purposes." },
              { videoId: "SqGRnlXplx0", title: "The Rest of God — Eugene Peterson on Sabbath", channel: "Regent College", description: "Peterson on sabbath as a revolutionary act — how the practice of Sabbath subverts the culture of productivity and restores the pastoral soul to its proper relationship with God." },
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
