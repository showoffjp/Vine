"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "The Body Is Not the Enemy",
    verse: "1 Corinthians 6:19-20",
    text: "Your body is a temple of the Holy Spirit. This verse is often used to shame people in addiction — as if the body's compulsion toward the drug is a moral failure of will. But Paul's point is the opposite: the body has worth. Its craving is real, physiological, and responds to medication-assisted treatment, nutrition, sleep, and exercise. Caring for the temple means honoring the biology, not punishing it.",
  },
  {
    title: "Addiction Is Not Moral Weakness Alone",
    verse: "Romans 7:15",
    text: "I do not do what I want to do, but what I hate — I do. Paul is not describing a small inconsistency between intention and behavior. He is describing the experience of a will that is divided, pulled against itself. People in opioid addiction recognize this exactly: they did not choose the dependence; the drug rewired the choice. Recovery requires understanding this neurobiologically as much as theologically.",
  },
  {
    title: "God Meets You in the Physical Reality of Withdrawal",
    verse: "Psalm 22:24",
    text: "He has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help. The physical agony of opioid withdrawal — the sweating, the trembling, the sleeplessness, the nausea — is real. God does not abstract himself from embodied suffering. He is present in the withdrawal ward as surely as in the sanctuary.",
  },
  {
    title: "Shame Drives the Cycle; Grace Breaks It",
    verse: "Romans 8:1",
    text: "There is now no condemnation for those who are in Christ Jesus. The shame cycle of addiction is well-documented: use produces shame, shame drives isolation, isolation drives more use. The gospel breaks the cycle not by minimizing the harm of addiction but by severing shame's power to condemn. You can bring the truth of your use to God without fearing his face.",
  },
  {
    title: "Recovery Is a Community Project",
    verse: "Ecclesiastes 4:10",
    text: "If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up. Opioid recovery without community almost never succeeds. Sponsorship, accountability, peer support, family involvement, and the church's active presence are not supplemental to recovery — they are constitutive of it. The body of Christ is built for exactly this.",
  },
];

const voices = [
  {
    id: 1,
    name: "William Cope Moyers",
    role: "Addiction advocate, author Broken: My Story of Addiction and Redemption",
    quote: "The disease does not care how smart you are, how good your family is, or how much you believe in God. But God cares about the disease.",
    bio: "William Cope Moyers is the son of journalist Bill Moyers and a prominent advocate for addiction as a disease that requires medical as well as spiritual treatment.",
  },
  {
    id: 2,
    name: "John Baker",
    role: "Founder, Celebrate Recovery",
    quote: "Celebrate Recovery is not for people who need God. It is for people who know they need God and still can't stop.",
    bio: "John Baker founded Celebrate Recovery at Saddleback Church as a Christ-centered 12-step program that has helped millions of people in addiction find community, accountability, and the grace of Jesus.",
  },
  {
    id: 3,
    name: "Matthew Stanford",
    role: "Author, Grace for the Afflicted",
    quote: "The church that refuses to engage addiction has abdicated the very ministry Jesus modeled — going to where the broken actually are.",
    bio: "Matthew Stanford is a neuroscientist and Christian who has worked extensively on the intersection of brain science, mental illness, and addiction — and the church's often complicated relationship with all three.",
  },
  {
    id: 4,
    name: "Ed Welch",
    role: "CCEF counselor, author Addictions: A Banquet in the Grave",
    quote: "Addiction is about worship as much as it is about chemistry. Both are real. Both matter for recovery.",
    bio: "Ed Welch's approach takes both the neurological reality of addiction and the spiritual reality of disordered desire seriously, arguing that genuine recovery addresses both dimensions.",
  },
];

const practices = [
  {
    icon: "💊",
    title: "Pursue Medical Treatment Without Shame",
    text: "Medication-assisted treatment (MAT) with buprenorphine or methadone is evidence-based and saves lives. There is no theological reason to refuse effective medical treatment for a medical condition. Talk to a doctor who specializes in addiction medicine.",
  },
  {
    icon: "🤝",
    title: "Find a Recovery Community",
    text: "NA (Narcotics Anonymous), Celebrate Recovery, SMART Recovery, and other peer-support programs provide the community that makes recovery possible. Attending meetings is not a sign of weakness; it is wisdom about how human beings actually change.",
  },
  {
    icon: "☎️",
    title: "Build a Safety Net Before You Need It",
    text: "Know your triggers. Have three people you can call at 2am. Know the address of your nearest emergency room. Have a plan for when cravings spike. Safety planning is not pessimistic; it is what sober people do to stay sober.",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Involve Family with Boundaries",
    text: "Families of people in opioid addiction need support and boundaries of their own. Al-Anon, Nar-Anon, and family therapy help families stop enabling while staying connected. Recovery is harder without family involvement but impossible with enmeshed enabling.",
  },
  {
    icon: "⛪",
    title: "Tell Your Church the Truth",
    text: "Many Christians hide addiction because they fear judgment. Find a pastor, deacon, or trusted church member who will hold your reality with grace rather than condemnation. The community that knows the truth can pray specifically, support practically, and celebrate genuinely.",
  },
  {
    icon: "📖",
    title: "Work a Program Alongside Scripture",
    text: "The Celebrate Recovery program overlays the 12 steps with beatitudes and biblical wisdom. The combination of structured relapse-prevention work and honest engagement with Scripture has helped many Christians in opioid recovery. Neither alone is as effective as both together.",
  },
];

const scriptures = [
  { verse: "Romans 8:1", text: "Therefore, there is now no condemnation for those who are in Christ Jesus." },
  { verse: "James 5:16", text: "Therefore confess your sins to each other and pray for each other so that you may be healed. The prayer of a righteous person is powerful and effective." },
  { verse: "Psalm 22:24", text: "For he has not despised or scorned the suffering of the afflicted one; he has not hidden his face from him but has listened to his cry for help." },
  { verse: "Romans 7:15", text: "I do not understand what I do. For what I want to do I do not do, but what I hate I do." },
  { verse: "John 10:10", text: "The thief comes only to steal and kill and destroy; I have come that they may have life, and have it to the full." },
  { verse: "Ecclesiastes 4:10", text: "If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up." },
];

type OAEntry = { id: string; date: string; honest: string; anchor: string; prayer: string };

export default function OpioidAddictionRecoveryChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<OAEntry[]>([]);
  const [honest, setHonest] = useState("");
  const [anchor, setAnchor] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_opioidrecoverychristj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!honest.trim()) return;
    const e: OAEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), honest, anchor, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_opioidrecoverychristj_entries", JSON.stringify(next));
    setHonest(""); setAnchor(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_opioidrecoverychristj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Opioid Addiction Recovery</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For Christians in opioid addiction and recovery — and for families and churches who love them — where medical reality and the gospel both get taken seriously.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>If you are in crisis</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            <strong>988</strong> Lifeline · SAMHSA <strong>1-800-662-4357</strong> · <a href="https://www.celebraterecovery.com" style={{ color: "#fca5a5" }}>celebraterecovery.com</a> · <a href="https://www.na.org" style={{ color: "#fca5a5" }}>na.org</a> · Text <strong>741741</strong>
          </p>
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
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What is honestly true today?</label>
                <textarea value={honest} onChange={e => setHonest(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Days sober, cravings, victories, struggles — be honest..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What is your anchor when cravings come?</label>
                <textarea value={anchor} onChange={e => setAnchor(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="A person to call, a verse, a memory of why sobriety matters..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer for today</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Speak to God — about the craving, the gratitude, the fear, all of it..." />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. One day at a time.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.honest && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Honest truth today</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.honest}</p></>}
                {e.anchor && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Anchor</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.anchor}</p></>}
                {e.prayer && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Understanding Addiction as a Brain Disease</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>The neuroscience of opioid addiction and why willpower alone is not sufficient for recovery.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Understanding Addiction as a Brain Disease" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Celebrate Recovery — Why It Works</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>John Baker on the Christ-centered 12-step approach and how the church can be the recovery community people need.</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Celebrate Recovery Why It Works" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Grace for Addiction — Ed Welch</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On taking both the chemistry and the spiritual dimensions of addiction seriously — and what genuine grace looks like for someone in the grip of addiction.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Grace for Addiction Ed Welch" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Family Recovery — Loving Someone in Addiction</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>How family members can support without enabling — and find their own healing alongside their loved one's recovery.</p>
              <VideoEmbed videoId="j2h-q3ZPKFI" title="Family Recovery Loving Someone in Addiction" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
