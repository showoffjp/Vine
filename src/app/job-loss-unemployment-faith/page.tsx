"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F";
const CARD = "#12121F";
const BORDER = "#1E1E32";
const GREEN = "#3a7d56";
const TEXT = "#F2F2F8";
const MUTED = "#9898B3";

const theology = [
  {
    title: "Your Identity Is Not Your Job",
    verse: "Psalm 62:5–6",
    text: "\"Yes, my soul, find rest in God; my hope comes from him. Truly he is my rock and my salvation; he is my fortress, I will not be shaken.\" One of job loss's deepest wounds is identity — particularly for men in cultures that tie worth to productivity. But the Psalms anchor identity not in occupation, title, or output. The foundation is not what you produce. It is who holds you. When the job is gone, that foundation remains.",
  },
  {
    title: "Elijah Was Fed Before He Was Sent",
    verse: "1 Kings 19:5–7",
    text: "\"All at once an angel touched him and said, 'Get up and eat.' He looked around, and there by his head was some bread baked over hot coals, and a jar of water. He ate and drank and then lay down again. The angel of the LORD came back a second time and touched him and said, 'Get up and eat, for the journey is too great for you.'\" Elijah was not given a strategic plan. He was given food and rest. When the journey seems too great, God's first response is often practical sustenance — not vision, not strategy, not a five-year plan.",
  },
  {
    title: "Waiting Is Part of the Biblical Pattern",
    verse: "Isaiah 40:31",
    text: "\"But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.\" The promise here is specifically to those who wait — the Hebrew word for hope implies patient, expectant waiting. The in-between time of unemployment is not wasted time. It is the time in which hope is being worked into the character at a level that productivity cannot reach.",
  },
  {
    title: "The Worker's Dignity Comes from God, Not the Market",
    verse: "Genesis 2:15",
    text: "\"The LORD God took the man and put him in the Garden of Eden to work it and take care of it.\" Work is a creation ordinance — a pre-fall good that reflects the image of a God who works and creates. But this is work as dignity and vocation, not work as identity or productivity-based worth. The person who cannot find work has not lost their dignity. They have lost access to one expression of it.",
  },
  {
    title: "God Provides Through Community, Not Just from Thin Air",
    verse: "Acts 2:44–45",
    text: "\"All the believers were together and had everything in common. They sold property and possessions to give to anyone who had need.\" The early church's economic sharing was not incidental to the gospel — it was the gospel made visible. The person who has lost work and needs help is not outside the church's responsibility. The church that celebrates abundance and ignores its unemployed members has abbreviated the Acts 2 vision.",
  },
];

const voices = [
  {
    id: 1,
    name: "Bob Goff",
    role: "Author, Love Does; Speaker",
    quote: "You are not what you do. You are who you love and who loves you — and neither of those is on your business card.",
    bio: "Goff's work on identity rooted in love rather than accomplishment has resonated with many who have experienced job loss and the identity disorientation that accompanies it.",
  },
  {
    id: 2,
    name: "Tim Keller",
    role: "Author, Every Good Endeavor; Founder, Redeemer Presbyterian",
    quote: "If work is your identity, job loss will feel like death. If God is your identity, job loss will be deeply painful — but not final.",
    bio: "Keller's theological work on vocation and work has provided a generation of Christians with a framework for holding work seriously without making it an idol.",
  },
  {
    id: 3,
    name: "Dr. Brené Brown",
    role: "Author, Daring Greatly; Shame Researcher",
    quote: "Unemployment triggers shame in almost every person I've interviewed — the shame of not being enough, of having failed, of being seen as less. That shame must be named and challenged.",
    bio: "Brown's research on shame has been particularly relevant to job loss, where men especially experience profound shame attached to the loss of the provider role — shame that must be identified before it can be challenged.",
  },
  {
    id: 4,
    name: "Nicholas Wolterstorff",
    role: "Philosopher, Author of Lament for a Son",
    quote: "When the life you built is dismantled by forces outside your control, lament is the only honest response — and lament is prayer.",
    bio: "Wolterstorff's theological work on suffering and lament has application to the particular grief of job loss — the loss of structure, identity, contribution, and economic security that employment provides.",
  },
];

const practices = [
  {
    icon: "📋",
    title: "File for Unemployment Benefits Immediately",
    text: "Do not delay filing for unemployment benefits — you are entitled to them and the process takes time. Go to your state's unemployment website on day one. This is not charity; it is insurance you paid into through employment taxes.",
  },
  {
    icon: "💰",
    title: "Inventory Your Finances Honestly",
    text: "List every account, every monthly expense, every asset, and every obligation. Knowing the actual runway gives you something concrete to work with instead of vague fear. Contact creditors proactively — hardship programs exist for most major obligations.",
  },
  {
    icon: "👥",
    title: "Activate Your Network Before You Need It",
    text: "The majority of jobs are filled through relationships, not applications. Reach out to former colleagues, mentors, and professional connections now — not when you are desperate. Frame it as staying in touch, not as begging. People want to help.",
  },
  {
    icon: "🗓️",
    title: "Maintain Structure During Unemployment",
    text: "The collapse of work-imposed structure is disorienting. Set a daily schedule: wake time, job search blocks, physical activity, learning, and social contact. Structure supports mental health during unemployment as much as income does.",
  },
  {
    icon: "🧠",
    title: "Address the Mental Health Impact",
    text: "Job loss is one of the highest-ranked stressors on the Holmes-Rahe Stress Scale. Depression, anxiety, and shame are clinical responses to a clinical stressor. If your mental health is suffering, seek care — not as weakness, but as appropriate response to a significant wound.",
  },
  {
    icon: "⛪",
    title: "Let Your Church Community Know",
    text: "The shame of job loss keeps people silent in the community where they most need help. Tell one trusted person in your church what is happening. Communities that do not know about needs cannot meet them — and many churches have job search networks, skill sets, and connections that can help.",
  },
];

const scriptures = [
  { verse: "Philippians 4:11–12", text: "\"I have learned to be content whatever the circumstances. I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation.\"" },
  { verse: "Matthew 6:33", text: "\"But seek first his kingdom and his righteousness, and all these things will be given to you as well.\"" },
  { verse: "Psalm 37:25", text: "\"I was young and now I am old, yet I have never seen the righteous forsaken or their children begging bread.\"" },
  { verse: "Proverbs 3:5–6", text: "\"Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.\"" },
  { verse: "Romans 8:28", text: "\"And we know that in all things God works for the good of those who love him, who have been called according to his purpose.\"" },
  { verse: "Lamentations 3:22–23", text: "\"Because of the LORD's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.\"" },
];

type JobLossEntry = {
  id: string;
  date: string;
  feeling: string;
  step: string;
  prayer: string;
};

export default function JobLossUnemploymentFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<JobLossEntry[]>([]);
  const [feeling, setFeeling] = useState("");
  const [step, setStep] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_joblossunemploymentfaith_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!feeling.trim()) return;
    const entry: JobLossEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      feeling,
      step,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_joblossunemploymentfaith_entries", JSON.stringify(updated));
    setFeeling(""); setStep(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_joblossunemploymentfaith_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>🌿</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Job Loss, Unemployment & Faith
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For Christians navigating job loss and unemployment — theology that separates identity from occupation, practical guidance for the financial and emotional realities, and community resources for the in-between time.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>Dial 211</strong> for local assistance | <strong>988</strong> Suicide & Crisis Lifeline | <strong>benefits.gov</strong> — federal benefit programs
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem", justifyContent: "center" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              padding: "0.5rem 1rem", borderRadius: 20, border: "none", cursor: "pointer",
              background: tab === t ? GREEN : CARD, color: tab === t ? "#fff" : MUTED,
              fontWeight: tab === t ? "bold" : "normal", fontSize: "0.875rem",
              textTransform: "capitalize",
            }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((item, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: 1, marginBottom: "0.25rem" }}>{item.verse}</div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: "bold", marginBottom: "0.75rem", color: TEXT }}>{item.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{item.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <div style={{ width: 48, height: 48, borderRadius: "50%", background: GREEN, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", fontSize: "1.2rem", color: "#fff", flexShrink: 0 }}>
                    {v.name.charAt(0)}
                  </div>
                  <div>
                    <div style={{ fontWeight: "bold", color: TEXT }}>{v.name}</div>
                    <div style={{ color: MUTED, fontSize: "0.8rem" }}>{v.role}</div>
                  </div>
                </div>
                <blockquote style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", color: TEXT, fontStyle: "italic", margin: "0 0 0.75rem" }}>
                  "{v.quote}"
                </blockquote>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, fontSize: "0.875rem", lineHeight: 1.6, margin: 0 }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", borderLeft: `4px solid ${GREEN}` }}>
                <div style={{ color: GREEN, fontWeight: "bold", fontSize: "0.875rem", marginBottom: "0.5rem" }}>{s.verse}</div>
                <p style={{ color: TEXT, fontStyle: "italic", lineHeight: 1.7, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h3 style={{ color: GREEN, marginBottom: "1rem", fontWeight: "bold" }}>Private Journal</h3>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>What am I feeling today — honestly — about the job situation?</label>
                <textarea value={feeling} onChange={e => setFeeling(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>One specific step I took or will take today in the search or toward stability:</label>
                <textarea value={step} onChange={e => setStep(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer — including what you need and what you are trusting:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.feeling && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Feeling:</strong> {e.feeling}</p>}
                {e.step && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Step:</strong> {e.step}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="O1IkI6Sn1oA" title="Job Loss and Identity — Who Are You When the Work Is Gone?" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Job Loss and Identity: Who Are You When the Work Is Gone?</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Theological reflection on the identity disruption that job loss creates and how to find foundation elsewhere</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="Zd4SNVmA7Kc" title="Tim Keller on Work, Vocation, and the Gospel" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Tim Keller: Work, Vocation, and the Gospel</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Keller on what the gospel says about the dignity of work and the right relationship between work and identity</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="APQ5b6pLqrs" title="Practical Steps After Job Loss" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Practical Steps After Job Loss: Finance, Search, and Stability</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Financial and practical guidance for the first weeks after job loss, including what to prioritize and what to avoid</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="K3FfCOVvIH0" title="The Shame of Job Loss and How the Gospel Answers It" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Shame of Job Loss and How the Gospel Answers It</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Pastoral reflection on the shame spiral that often accompanies unemployment and how the gospel interrupts it</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
