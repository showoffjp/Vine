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
    title: "Moses Needed Jethro Before He Needed a Vision",
    verse: "Exodus 18:18",
    text: "\"You and these people who come to you will only wear yourselves out. The work is too heavy for you; you cannot handle it alone.\" Jethro's words to Moses are the first recorded critique of a leader's failure to delegate and distribute the work of ministry. Moses was doing real work — genuinely important work — and it was destroying him. The fact that the work is important does not mean the current structure of doing it is right.",
  },
  {
    title: "Elijah Was Fed, Not Rebuked",
    verse: "1 Kings 19:7",
    text: "\"The angel of the LORD came back a second time and touched him and said, 'Get up and eat, for the journey is too great for you.'\" Elijah resigned from ministry in burnout, prayed to die, and slept under a bush. God's first response was food and rest — twice. Then a long sabbatical. Then quiet. Then one more question: \"What are you doing here, Elijah?\" God's pastoral care of the burned-out prophet did not begin with a rebuke about his weakness of faith.",
  },
  {
    title: "Jesus Withdrew — Regularly",
    verse: "Mark 1:35",
    text: "\"Very early in the morning, while it was still dark, Jesus got up, left the house and went off to a solitary place, where he prayed.\" Jesus withdrew from public ministry regularly — to pray, to rest, to reorient. He did not withdraw because the need had stopped. He withdrew because the capacity to respond to need requires regular renewal. The pastor who never withdraws has abandoned the pattern of Jesus.",
  },
  {
    title: "The Helper Is Not Required to Help at Cost of Self-Destruction",
    verse: "Matthew 22:37–39",
    text: "\"Love the Lord your God with all your heart and with all your soul and with all your mind. This is the first and greatest commandment. And the second is like it: Love your neighbor as yourself.\" The command to love neighbor uses the self as the standard — not self-erasure, but self-knowledge. The pastor who does not love themselves enough to maintain their own health cannot sustain neighbor-love. The command presupposes that the self is worth attending to.",
  },
  {
    title: "The Kingdom Does Not Depend on Your Unsustainability",
    verse: "Psalm 46:10",
    text: "\"Be still, and know that I am God; I will be exalted among the nations, I will be exalted in the earth.\" The church that continues when the pastor takes a sabbatical is a healthy church. The church that collapses when the pastor is unavailable has become dependent on the pastor rather than on God. The kingdom does not require your destruction. It requires your faithfulness — and faithfulness includes self-care.",
  },
];

const voices = [
  {
    id: 1,
    name: "Dr. James Dobson",
    role: "Christian Psychologist; Focus on the Family Founder",
    quote: "Pastoral burnout is the most predictable of crises — it is produced by a system that treats pastors as resources rather than people — and it is also the most preventable.",
    bio: "Dobson has written and spoken about ministerial health for decades, arguing that evangelical culture's expectations of pastoral self-sacrifice have produced generations of burned-out leaders.",
  },
  {
    id: 2,
    name: "Dr. Archibald Hart",
    role: "Fuller Seminary, Author of Adrenaline and Stress",
    quote: "The pastoral profession has one of the highest burnout rates of any helping profession — and the church is often the last to notice when it is happening to its own leaders.",
    bio: "Hart's clinical and theological work on ministerial stress has helped churches understand the specific physiology of burnout and what sustainable ministry structures actually require.",
  },
  {
    id: 3,
    name: "Chuck DeGroat",
    role: "Author, When Narcissism Comes to Church; Seminary Professor",
    quote: "Pastoral burnout is not primarily caused by too much work. It is caused by too much self-sufficiency — the refusal to receive care from others and from God.",
    bio: "DeGroat's work on the shadow side of ministry leadership, including the ways unhealthy pastors create unhealthy churches and vice versa, has been formative for evangelical conversations about ministerial health.",
  },
  {
    id: 4,
    name: "Ruth Haley Barton",
    role: "Author, Strengthening the Soul of Your Leadership; Spiritual Director",
    quote: "A leader cannot take people to places of spiritual depth they have not been themselves. The leader's soul is the primary leadership instrument.",
    bio: "Barton's contemplative approach to leadership formation has helped pastors understand that the interior life is not a supplement to ministry — it is the ground from which ministry grows.",
  },
];

const practices = [
  {
    icon: "🛑",
    title: "Name What Is Happening",
    text: "Pastoral burnout often goes unnamed for months or years because pastors fear what naming it means. Begin by telling one trusted person — a spouse, a therapist, a mentor, a denominational leader — the honest truth about where you are. Naming is not weakness. It is the first act of recovery.",
  },
  {
    icon: "🏖️",
    title: "Take the Sabbatical You Are Owed",
    text: "Most denominations recommend sabbaticals of 1–3 months every 5–7 years. If you have not taken yours, this is the time. Work with your board or overseers to structure a real sabbatical — not a working vacation, but genuine rest with no ministry obligations.",
  },
  {
    icon: "🧠",
    title: "Get Therapeutic Support",
    text: "Pastoral burnout frequently involves depression, anxiety, compassion fatigue, and identity confusion. These are clinical conditions that respond to clinical treatment. A therapist who works with clergy and ministry workers specifically understands the unique pressures of the pastoral role.",
  },
  {
    icon: "👥",
    title: "Rebuild Peer Relationships Outside Your Congregation",
    text: "Pastors frequently have no real peer friendships — everyone in their life is either a congregant or a subordinate. Deliberately cultivate peer friendships with other pastors and ministry workers outside your church. Isolation is one of the primary drivers of pastoral breakdown.",
  },
  {
    icon: "📋",
    title: "Restructure Your Week",
    text: "Sustainable ministry requires protected time — for prayer, for rest, for family, for health. Review your current schedule with brutal honesty. If you have no margin, you will eventually have a breakdown. Margin is not laziness. It is structural health.",
  },
  {
    icon: "✝️",
    title: "Return to Practices of Personal Spiritual Formation",
    text: "Ministerial burnout frequently involves the gradual erosion of personal spiritual practices — replaced by professional ministry activity. Return to the practices that form you as a person: silence, prayer, Scripture reading for your own soul (not for sermons), spiritual direction.",
  },
];

const scriptures = [
  { verse: "Matthew 11:28–30", text: "\"Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls. For my yoke is easy and my burden is light.\"" },
  { verse: "Isaiah 40:29–31", text: "\"He gives strength to the weary and increases the power of the weak. Even youths grow tired and weary... but those who hope in the LORD will renew their strength.\"" },
  { verse: "Psalm 23:2–3", text: "\"He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.\"" },
  { verse: "Galatians 6:9", text: "\"Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.\"" },
  { verse: "John 15:4–5", text: "\"Remain in me, as I also remain in you. No branch can bear fruit by itself; it must remain in the vine. Neither can you bear fruit unless you remain in me.\"" },
  { verse: "2 Corinthians 4:7", text: "\"But we have this treasure in jars of clay to show that this all-surpassing power is from God and not from us.\"" },
];

type BurnoutEntry = {
  id: string;
  date: string;
  honest: string;
  boundary: string;
  prayer: string;
};

export default function PastoralBurnoutMinistryWorkersPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<BurnoutEntry[]>([]);
  const [honest, setHonest] = useState("");
  const [boundary, setBoundary] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("vine_pastoralburnoutministry_entries");
    if (stored) setEntries(JSON.parse(stored));
  }, []);

  function saveEntry() {
    if (!honest.trim()) return;
    const entry: BurnoutEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      honest,
      boundary,
      prayer,
    };
    const updated = [entry, ...entries];
    setEntries(updated);
    localStorage.setItem("vine_pastoralburnoutministry_entries", JSON.stringify(updated));
    setHonest(""); setBoundary(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const updated = entries.filter(e => e.id !== id);
    setEntries(updated);
    localStorage.setItem("vine_pastoralburnoutministry_entries", JSON.stringify(updated));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <div style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>⛪</div>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: GREEN, marginBottom: "0.5rem" }}>
            Pastoral Burnout & Ministry Workers
          </h1>
          <p style={{ color: MUTED, fontSize: "1rem", lineHeight: 1.6 }}>
            For pastors, ministry workers, and ministry leaders navigating burnout — theological permission to stop, clinical understanding of what burnout is, and practical guidance for recovery and sustainable ministry.
          </p>
          <div style={{ marginTop: "1rem", padding: "0.75rem", background: "#1a0a0a", border: "1px solid #5a1a1a", borderRadius: 8 }}>
            <p style={{ color: "#ff8888", fontSize: "0.875rem", margin: 0 }}>
              Support: <strong>988 Suicide & Crisis Lifeline</strong> | <strong>Pastoral Care Inc:</strong> pastoralcareinc.org | <strong>Focus on the Family Pastoral Support:</strong> 1-877-233-4455
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
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>The honest truth about where I am in ministry and in my own soul right now:</label>
                <textarea value={honest} onChange={e => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>One boundary or structural change I could make to protect my health:</label>
                <textarea value={boundary} onChange={e => setBoundary(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ color: MUTED, fontSize: "0.875rem", display: "block", marginBottom: "0.4rem" }}>A prayer for yourself — not for your congregation:</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 8, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: "#fff", border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", cursor: "pointer", fontWeight: "bold" }}>Save Entry</button>
            </div>
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ color: MUTED, fontSize: "0.75rem", marginBottom: "0.75rem" }}>{e.date}</div>
                {e.honest && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Honest:</strong> {e.honest}</p>}
                {e.boundary && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Boundary:</strong> {e.boundary}</p>}
                {e.prayer && <p style={{ color: TEXT, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "0.5rem" }}><strong style={{ color: GREEN }}>Prayer:</strong> {e.prayer}</p>}
                <button onClick={() => deleteEntry(e.id)} style={{ color: "#ff6666", background: "none", border: "none", cursor: "pointer", fontSize: "0.8rem", padding: 0 }}>Delete</button>
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="cDriZmqHMEI" title="Pastoral Burnout — What It Is and How to Recover" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Pastoral Burnout: What It Is, What Causes It, and How to Recover</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Clinical and pastoral overview of ministerial burnout — its symptoms, causes, and the path toward genuine recovery</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="bM7-eBTH2-k" title="Ruth Haley Barton on Strengthening the Soul of Leadership" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Ruth Haley Barton: Strengthening the Soul of Your Leadership</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Barton on why the leader's interior life is the primary leadership instrument and what formation requires</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="oqwS3AkKEFQ" title="The Unhealthy Leader and the Unhealthy Church — Chuck DeGroat" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>The Unhealthy Leader and the Unhealthy Church</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>DeGroat on how pastoral health and church health are inseparable — and what recovery requires in both</p>
              </div>
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, overflow: "hidden" }}>
              <VideoEmbed videoId="8Su5uo8PFIY" title="Elijah Under the Broom Tree — God's Pastoral Care for Burned-Out Leaders" />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ color: GREEN, margin: "0 0 0.25rem", fontSize: "1rem" }}>Elijah Under the Broom Tree: God&apos;s Model for Ministerial Recovery</h3>
                <p style={{ color: MUTED, fontSize: "0.85rem", margin: 0 }}>Theological reflection on 1 Kings 19 and what God's response to Elijah's burnout teaches about ministry renewal</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
