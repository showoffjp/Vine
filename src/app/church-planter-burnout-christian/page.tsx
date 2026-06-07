"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const ACCENT = "#3a7d56";
const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "The Hidden Cost of the Church Planting Vision",
    body: "Church planters carry a burden that most ministry workers do not: they are simultaneously the founding leader, primary preacher, primary counselor, administrator, fundraiser, landlord negotiator, and often the custodian. They carry the weight of having called people into a community that exists partly because of their personality and vision. When that community struggles, when growth stalls, when the financial pressure intensifies, the church planter often has no safe place to bring the failure — because they are the pastor of the people they would otherwise lean on.",
  },
  {
    title: "Moses, Jethro, and the Leadership Trap",
    body: "Moses was burning out leading Israel alone — hearing cases \"from morning till evening\" (Exodus 18:13). His father-in-law Jethro intervened not with spiritual advice but with organizational counsel: delegate, distribute responsibility, build a tier of leaders. God's solution to Moses' unsustainability was structural, not more prayer. This is a critical theological point for church planters: burnout is often not a spiritual failure but a structural one — an unsustainable architecture of responsibility that requires reorganization, not just repentance.",
  },
  {
    title: "The Right to Be Weak: Paul's Surprising Boast",
    body: "Paul, the most prolific church planter in history, wrote: \"I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me\" (2 Corinthians 12:9). He described his ministry not as triumphant but as \"afflicted in every way, but not crushed; perplexed, but not driven to despair\" (4:8). Church planting culture often celebrates startup success and obscures failure. But Paul's apostolic model was honesty about weakness as the very context for Christ's power. The struggling church planter is in good company.",
  },
  {
    title: "When the Church Plant Fails: Theology of Fruitless Seasons",
    body: "Not every church plant that closes was a failure of faithfulness. The parable of the sower (Matthew 13) shows seed falling on all kinds of soil, with vastly different outcomes — and the sower is not blamed for the soil. Ecclesiastes 3 gives language for times and seasons that do not yield what we hoped. The closing of a church plant does not necessarily mean God was not in the planting. Some seeds are planted for a future harvest that someone else will reap. Faithfulness is measured differently than success.",
  },
  {
    title: "The Neglected Family: A Non-Negotiable Reckoning",
    body: "Many church planters discover, in the wreckage of burnout, that they sacrificed their marriage and their children's access to a parent on the altar of the plant. This is a real spiritual failure — not because ministry is unimportant but because \"if anyone does not provide for his relatives, and especially for members of his household, he has denied the faith\" (1 Timothy 5:8). The family is the first community the church planter is called to lead. If the plant succeeds and the family fails, the planter has not succeeded.",
  },
];

const voices = [
  {
    name: "Steve Timmis",
    role: "Former Acts 29 CEO; has reflected extensively on burnout in church planting culture",
    quote: "We have created a culture in church planting that worships the heroic founder and shames the one who cannot sustain it. The theology we preach — grace, weakness, dependence — is the opposite of what we model. This disconnect is costing people their health, their marriages, and their faith.",
  },
  {
    name: "Daniel Montgomery",
    role: "Church planter, author; has publicly shared his experience with burnout and leadership failure",
    quote: "The hardest thing about being a church planter in burnout is that you are the shepherd and there is no one to shepherd you. You have poured everything into creating community for others, and you have no community yourself. This isolation is the most dangerous part.",
  },
  {
    name: "Jared Wilson",
    role: "Author of The Prodigal Church and ministry writer; has written on sustainable ministry",
    quote: "The gospel we preach says we are justified by grace, not by performance. But many church planters are living as if the plant's survival depends entirely on their effort, charisma, and sacrifice. This is functional works-righteousness applied to ministry. It will eventually break you.",
  },
  {
    name: "Ruth Haley Barton",
    role: "Author of Strengthening the Soul of Your Leadership; retreat guide for ministry leaders",
    quote: "The soul of the leader is the most important thing the leader can tend. A depleted, unformed soul leading a church plant will eventually lead from its wounds rather than from its gifts. The work of inner formation is not separate from the work of church planting. It is the foundation of it.",
  },
];

const practices = [
  {
    title: "Find a Peer Cohort of Other Church Planters",
    body: "The isolation of church planting is one of its most dangerous features. Find a group of other church planters — ideally in your denomination or network — who meet regularly for honest conversation about what is actually happening. Not for strategy, not for inspiration, but for the kind of peer support where someone can say \"I am not okay\" and be received. Many denominations and networks (Acts 29, Send Network, AMS) offer planter cohorts; join one.",
  },
  {
    title: "Engage Coaching or Supervision — Not Just Consultation",
    body: "There is a difference between ministry consultation (advice on strategy and execution) and coaching or supervision (attention to the person leading, their interior life, their sustainability). Church planters need the latter more than the former. Find a coach or spiritual director who is not part of your church or network, who has no stake in your success, and who can hold the whole person — not just the ministry leader.",
  },
  {
    title: "Set Non-Negotiable Family Rhythms",
    body: "Decide, before the demands of the plant consume everything, what is non-negotiable for your family: date nights, family dinners, sabbath, the kids' games you will attend. Put these in your calendar as appointments you do not cancel. The plant will always have more needs than you can meet; your family's access to a present parent and spouse cannot be infinitely deferred. Protect the family first.",
  },
  {
    title: "Have an Exit Plan Before You Need One",
    body: "Church planters rarely think about what happens if the plant fails, if they burn out, or if they need to leave for mental health reasons. Having a plan before the crisis is wisdom, not failure. Talk with your sending church, your denomination, or your network about what support exists if things go wrong. Knowing you have a way out if needed often makes it possible to stay longer.",
  },
  {
    title: "If the Plant Is Failing, Name It Early",
    body: "Many church plants struggle in silence for years before a crisis forces a decision. The secrecy compounds the harm — to the planter, their family, and the people in the congregation who are investing in something that may not be sustainable. Naming the reality early — to your sending church, your network, your elders — allows for honest discernment about the path forward: restructure, merge, close, or revitalize. Early naming preserves options. Late naming forecloses them.",
  },
  {
    title: "Tend Your Spiritual Life as a Non-Negotiable",
    body: "Church planters are so busy providing spiritual nourishment to others that their own spiritual life is often depleted to nothing. Build a non-negotiable spiritual practice that is for you, not for sermon prep: sabbath rest, personal prayer, spiritual direction, retreat, lectio divina. The pastor who feeds only others will eventually have nothing left to give. Jesus regularly withdrew from the crowds (Luke 5:16). The pattern is apostolic.",
  },
];

const scriptures = [
  { ref: "Exodus 18:17-18", text: "Moses' father-in-law said to him, 'What you are doing is not good. You and the people with you will certainly wear yourselves out, for the thing is too heavy for you. You are not able to do it alone.'" },
  { ref: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly of my weaknesses, so that the power of Christ may rest upon me." },
  { ref: "Matthew 11:28-30", text: "Come to me, all who labor and are heavy laden, and I will give you rest. Take my yoke upon you, and learn from me, for I am gentle and lowly in heart, and you will find rest for your souls. For my yoke is easy, and my burden is light." },
  { ref: "Luke 5:16", text: "But he would withdraw to desolate places and pray." },
  { ref: "Galatians 6:9", text: "And let us not grow weary of doing good, for in due season we will reap, if we do not give up." },
  { ref: "1 Kings 19:4", text: "But he himself went a day's journey into the wilderness and came and sat down under a broom tree. And he asked that he might die, saying, 'It is enough; now, O Lord, take away my life, for I am no better than my fathers.'" },
];

const videos = [
  { videoId: "5VqJCLNKwdQ", title: "Church Planting Burnout — What No One Talks About" },
  { videoId: "Dkl5_3Mf0Ek", title: "Ruth Haley Barton — Strengthening the Soul of Your Leadership" },
  { videoId: "2LXF_HU0nmo", title: "When the Church Plant Fails — Theological Reflection" },
  { videoId: "tZ6b1CkHqtA", title: "Jethro Principle — Sustainable Leadership Structure for Church Planters" },
];

const TABS = ["Theology", "Voices", "Practices", "Scripture", "Journal", "Videos"];

export default function ChurchPlanterBurnoutPage() {
  const [tab, setTab] = useState(0);
  const [entries, setEntries] = useState<{ id: number; date: string; plant: string; soul: string; prayer: string }[]>([]);
  const [form, setForm] = useState({ plant: "", soul: "", prayer: "" });
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("vine_churchplanterburnout_entries");
      if (raw) setEntries(JSON.parse(raw));
    } catch {}
  }, []);

  function saveEntry() {
    if (!form.plant.trim()) return;
    const next = [{ id: Date.now(), date: new Date().toLocaleDateString(), ...form }, ...entries];
    setEntries(next);
    localStorage.setItem("vine_churchplanterburnout_entries", JSON.stringify(next));
    setForm({ plant: "", soul: "", prayer: "" });
  }

  return (
    <main style={{ minHeight: "100vh", background: BG, color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ background: `linear-gradient(135deg, ${ACCENT}22 0%, #0d0d1a 60%)`, borderBottom: `1px solid ${BORDER}`, padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: "0.75rem", letterSpacing: "0.15em", color: ACCENT, textTransform: "uppercase", marginBottom: "0.75rem" }}>Vine Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>
            Church Planter Burnout
          </h1>
          <p style={{ fontSize: "1.1rem", color: MUTED, lineHeight: 1.7, maxWidth: 620 }}>
            You called others into community and have no community yourself. For church planters in burnout — honest theology about weakness, sustainable structures, and the grace that holds what performance cannot.
          </p>
          <div style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: `${ACCENT}18`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 6px 6px 0", fontSize: "0.9rem", color: MUTED }}>
            <strong style={{ color: TEXT }}>Need support?</strong> Ministry Care Line: <strong style={{ color: TEXT }}>1-800-728-6477</strong> &bull; Focus on the Family Pastor Support: <strong style={{ color: TEXT }}>1-844-337-4684</strong> &bull; Crisis: <strong style={{ color: TEXT }}>988</strong>
          </div>
        </div>
      </div>

      <div style={{ borderBottom: `1px solid ${BORDER}`, background: CARD }}>
        <div style={{ maxWidth: 800, margin: "0 auto", display: "flex", overflowX: "auto" }}>
          {TABS.map((t, i) => (
            <button key={t} onClick={() => setTab(i)} style={{ padding: "1rem 1.25rem", background: "none", border: "none", color: tab === i ? ACCENT : MUTED, borderBottom: tab === i ? `2px solid ${ACCENT}` : "2px solid transparent", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem", whiteSpace: "nowrap" }}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1.5rem" }}>
        {tab === 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Biblical & Theological Foundations</h2>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.25rem", background: "none", border: "none", color: TEXT, cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 600 }}>
                  {item.title}
                  <span style={{ color: ACCENT, fontSize: "1.2rem", flexShrink: 0, marginLeft: "1rem" }}>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && <div style={{ padding: "0 1.25rem 1.25rem", color: MUTED, lineHeight: 1.8 }}>{item.body}</div>}
              </div>
            ))}
          </div>
        )}

        {tab === 1 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Voices of Experience</h2>
            {voices.map((v, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic", marginBottom: "1rem" }}>&ldquo;{v.quote}&rdquo;</p>
                <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: "0.75rem" }}>
                  <div style={{ fontWeight: 700, color: ACCENT }}>{v.name}</div>
                  <div style={{ fontSize: "0.85rem", color: MUTED }}>{v.role}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 2 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Practical Guidance</h2>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <h3 style={{ color: ACCENT, marginBottom: "0.75rem", fontSize: "1.05rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.8 }}>{p.body}</p>
              </div>
            ))}
          </div>
        )}

        {tab === 3 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>Scripture for the Journey</h2>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: "0 10px 10px 0", padding: "1.25rem 1.5rem" }}>
                <div style={{ fontWeight: 700, color: ACCENT, marginBottom: "0.5rem", fontSize: "0.9rem", letterSpacing: "0.05em" }}>{s.ref}</div>
                <p style={{ color: TEXT, lineHeight: 1.8, fontStyle: "italic" }}>&ldquo;{s.text}&rdquo;</p>
              </div>
            ))}
          </div>
        )}

        {tab === 4 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Planter Journal</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Stored only on this device. A place to be honest about what you are actually carrying.</p>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>How is the plant today? Be honest.</label>
                <textarea value={form.plant} onChange={e => setForm(f => ({ ...f, plant: e.target.value }))} rows={3} placeholder="Growth, plateau, struggle, crisis, slow death..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>How is your soul today? Separate from the plant.</label>
                <textarea value={form.soul} onChange={e => setForm(f => ({ ...f, soul: e.target.value }))} rows={2} placeholder="Depleted, angry, questioning, barely holding on..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer (optional)</label>
                <textarea value={form.prayer} onChange={e => setForm(f => ({ ...f, prayer: e.target.value }))} rows={2} placeholder="Lord, I don't have enough for this. I need..." style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.75rem", color: TEXT, fontFamily: "Georgia, serif", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ alignSelf: "flex-start", background: ACCENT, color: "#fff", border: "none", borderRadius: 6, padding: "0.65rem 1.5rem", cursor: "pointer", fontFamily: "Georgia, serif", fontSize: "0.95rem" }}>Save Entry</button>
            </div>
            {entries.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <h3 style={{ color: MUTED, fontSize: "0.95rem" }}>Previous Entries</h3>
                {entries.map(e => (
                  <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                    <div style={{ fontSize: "0.8rem", color: MUTED, marginBottom: "0.75rem" }}>{e.date}</div>
                    {e.plant && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Plant: </span>{e.plant}</p>}
                    {e.soul && <p style={{ color: TEXT, marginBottom: "0.5rem", lineHeight: 1.7 }}><span style={{ color: MUTED, fontSize: "0.8rem" }}>Soul: </span>{e.soul}</p>}
                    {e.prayer && <p style={{ color: TEXT, lineHeight: 1.7, fontStyle: "italic" }}><span style={{ color: MUTED, fontStyle: "normal", fontSize: "0.8rem" }}>Prayer: </span>{e.prayer}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab === 5 && (
          <div>
            <h2 style={{ fontSize: "1.4rem", marginBottom: "0.25rem" }}>Video Resources</h2>
            <p style={{ color: MUTED, marginBottom: "1.5rem", fontSize: "0.9rem" }}>Teaching and testimony for church planters in the hard seasons.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
              {videos.map((v, i) => (
                <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, overflow: "hidden" }}>
                  <VideoEmbed videoId={v.videoId} title={v.title} />
                  <div style={{ padding: "0.75rem 1rem", fontSize: "0.9rem", color: MUTED }}>{v.title}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
