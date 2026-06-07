"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "You Are Not What You Produce",
    verse: "Genesis 1:27",
    text: "You bear the image of God not because of your title, your output, or your LinkedIn profile — but because you are. The culture around you has built an entire economy on the premise that your worth is tied to your productivity. But God called humanity 'very good' before anyone had ever worked a single day. Your dignity precedes your career.",
  },
  {
    title: "Unemployment Is Not Failure",
    verse: "Psalm 34:18",
    text: "Job loss comes from layoffs, restructuring, economic collapse, illness, injustice — and God meets you in every one of those realities. David wrote Psalm 34 while hiding in a cave, pretending to be insane, after his plan to seek refuge with a foreign king fell apart. God is near to those who are crushed, whatever crushed them.",
  },
  {
    title: "The Shame That Attaches to Unemployment",
    verse: "Isaiah 54:4",
    text: "Do not be afraid, for you will not be put to shame. God speaks directly into the specific humiliation of unemployment — the avoidance of social gatherings, the practiced lying ('I'm exploring options'), the dread of being asked what you do. This shame is a liar. It claims the past defines the future; God says the reproach of your youth will be forgotten.",
  },
  {
    title: "Work as Calling, Not Identity",
    verse: "Colossians 3:23-24",
    text: "When Paul writes 'whatever you do, work at it with all your heart, as working for the Lord,' he is relocating the source of work's meaning. Work done for the Lord retains its dignity even when a boss fires you, even when the company downsizes, even when the market shifts. Your call to love and serve God precedes your job description and outlasts it.",
  },
  {
    title: "The Gift of Wilderness",
    verse: "Hosea 2:14",
    text: "God said to Israel, 'I will lead her into the wilderness and speak tenderly to her.' Wilderness seasons — between callings, between roles, between chapters — are not punishments. They are intimate spaces where the noise of performance quiets and God can be heard again. Your season of job loss may be a wilderness. Lean into it rather than flee it.",
  },
];

const voices = [
  {
    id: 1,
    name: "Gordon Spykman",
    role: "Reformed theologian on vocation",
    quote: "The self that is called by God is always prior to the roles it plays.",
    bio: "Gordon Spykman's theological work on human dignity rooted in the image of God rather than in productivity has shaped how Christians think about personhood and vocation.",
  },
  {
    id: 2,
    name: "Lore Ferguson Wilbert",
    role: "Author, Handle with Care",
    quote: "Rest is not earned. It is received. The same is true of your worth.",
    bio: "Lore Ferguson Wilbert writes honestly about the intersection of the body, work, grief, and grace — including the times when life does not cooperate with our plans.",
  },
  {
    id: 3,
    name: "Paul David Tripp",
    role: "Author, Broken-Down House",
    quote: "You are not your worst moment. You are not your best resume. You are a person loved by God.",
    bio: "Paul David Tripp's pastoral writing consistently calls Christians back from identity rooted in achievement to identity rooted in Christ, especially during suffering.",
  },
  {
    id: 4,
    name: "Andy Crouch",
    role: "Author, The Life We're Looking For",
    quote: "We are persons, not resources. The economy confuses the two. God never does.",
    bio: "Andy Crouch writes about technology, culture, and human flourishing — including the ways economic systems can reduce persons to their productive capacity and the gospel's corrective word.",
  },
];

const practices = [
  {
    icon: "🕐",
    title: "Impose Structure When Structure Is Gone",
    text: "Unemployment collapses the scaffolding of the day. Create a loose daily structure — wake time, job-search hours, exercise, end-of-work ritual — not to perform productivity but to protect your mental health and sense of agency.",
  },
  {
    icon: "📖",
    title: "Separate Your Journal from Your Resume",
    text: "Keep two logs: one for the honest internal experience — grief, fear, shame, anger — and one for the practical job-search. Don't let the practical crowd out the honest. The honest is where God meets you.",
  },
  {
    icon: "🤝",
    title: "Tell One Safe Person the Full Truth",
    text: "Unemployment invites concealment. Every week, tell at least one trusted person the unvarnished reality: how many rejections came in, how hopeless it felt on Tuesday, what the finances actually look like. Secrecy breeds shame; truth told in safe relationship heals it.",
  },
  {
    icon: "⛪",
    title: "Stay Connected to Community Even When Ashamed",
    text: "The impulse to disappear from church, small groups, and friendships during unemployment is almost universal and almost always harmful. You need community precisely when you feel you don't deserve it. Force yourself to stay.",
  },
  {
    icon: "🌿",
    title: "Practice Non-Productive Time Deliberately",
    text: "Take walks. Sit with Scripture without journaling about it. Pray without an agenda. Cook a meal. These feel irresponsible when unemployed but they are not — they are practicing that your worth is not contingent on output. The gospel must be embodied, not just believed.",
  },
  {
    icon: "🔮",
    title: "Reimagine Vocation, Not Just Job Title",
    text: "Use this season to ask deeper questions: What is God making me for? What were the moments in past work that felt most alive? Where is the overlap between my gifts, my neighbor's need, and the world's deep hunger? A job search finds a job; a vocation discernment finds a life.",
  },
];

const scriptures = [
  { verse: "Psalm 34:18", text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit." },
  { verse: "Matthew 6:26", text: "Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?" },
  { verse: "Jeremiah 29:11", text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." },
  { verse: "Colossians 3:23-24", text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters, since you know that you will receive an inheritance from the Lord as a reward." },
  { verse: "Isaiah 54:4", text: "Do not be afraid; you will not be put to shame. Do not fear disgrace; you will not be humiliated. You will forget the shame of your youth and remember no more the reproach of your widowhood." },
  { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
];

type JLEntry = { id: string; date: string; grief: string; gift: string; prayer: string };

export default function JobLossIdentityCrisisPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<JLEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [gift, setGift] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_joblossidentityj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const e: JLEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief, gift, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_joblossidentityj_entries", JSON.stringify(next));
    setGrief(""); setGift(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_joblossidentityj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Job Loss & Identity Crisis</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>When work disappears, so can the sense of self. This is a space for Christians navigating unemployment, the shame it carries, and the gospel's word that worth is not earned.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>If you are in crisis</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>Call or text <strong>988</strong> (Suicide & Crisis Lifeline) · Text <strong>741741</strong> (Crisis Text Line) · <a href="https://www.nami.org" style={{ color: "#fca5a5" }}>nami.org</a></p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? PURPLE : BORDER}`, background: tab === t ? PURPLE : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: PURPLE, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
                <h2 style={{ fontSize: "1.15rem", fontWeight: 700, marginBottom: "0.75rem" }}>{t.title}</h2>
                <p style={{ color: MUTED, lineHeight: 1.8, margin: 0 }}>{t.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "voices" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {voices.map(v => (
              <div key={v.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ borderLeft: `3px solid ${PURPLE}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: PURPLE, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0 }}>{v.bio}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "practices" && (
          <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}>
            {practices.map((p, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{p.icon}</div>
                <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>{p.title}</h3>
                <p style={{ color: MUTED, lineHeight: 1.7, margin: 0, fontSize: "0.95rem" }}>{p.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "scripture" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {scriptures.map((s, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem 1.5rem" }}>
                <p style={{ color: PURPLE, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
                <p style={{ fontStyle: "italic", lineHeight: 1.8, margin: 0 }}>{s.text}</p>
              </div>
            ))}
          </div>
        )}

        {tab === "journal" && (
          <div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem", marginBottom: "1.5rem" }}>
              <h2 style={{ fontWeight: 700, marginBottom: "1.25rem" }}>Journal Entry</h2>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What is the grief of this season?</label>
                <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="What have you lost beyond the job itself..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What unexpected gift has emerged in this season?</label>
                <textarea value={gift} onChange={e => setGift(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Space, clarity, relationships, rest..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer for today</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Speak honestly to God about this season..." />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Begin by writing honestly.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.grief && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Grief of this season</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.grief}</p></>}
                {e.gift && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Unexpected gift</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.gift}</p></>}
                {e.prayer && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>When Work Defines Us — Andy Crouch</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>A theological reflection on how modern economies reduce persons to resources and what the gospel says about human dignity.</p>
              <VideoEmbed videoId="4Eg_di-O8nM" title="When Work Defines Us" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Identity in Christ When Life Collapses</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Paul David Tripp on finding your identity rooted in who God says you are rather than what you do.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Identity in Christ When Life Collapses" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Vocation, Calling, and the Gospel of Rest</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On understanding work as calling rather than identity — and what it means to rest in seasons of transition.</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Vocation Calling and the Gospel of Rest" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Shame and the Gospel</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On the specific shame that attaches to failure, unemployment, and public setback — and how the cross speaks into it.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Shame and the Gospel" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
