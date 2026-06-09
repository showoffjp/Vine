"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Suffering Interrupts the Story We Planned",
    verse: "Proverbs 19:21",
    text: "Many are the plans in a person's heart, but it is the Lord's purpose that prevails. The career you trained for, the professional identity you built over years, the sense of purpose that came from meaningful work — all of this can be interrupted by chronic illness. This is a real and serious loss. God's purposes do not require you to pretend it isn't.",
  },
  {
    title: "The Body Is Not the Enemy of the Spiritual Life",
    verse: "Romans 8:23",
    text: "We ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sons, the redemption of our bodies. Paul locates the groaning of the body not outside the spiritual life but within it. The body that cannot work, that is in pain, that has surrendered the career — is still the temple of the Holy Spirit. The groaning is a form of prayer.",
  },
  {
    title: "God's Provision Takes New Forms",
    verse: "Matthew 6:33",
    text: "But seek first his kingdom and his righteousness, and all these things will be given to you as well. This promise does not mean God will restore the career. It means God's provision is not contingent on the career. The person navigating disability benefits, reduced income, and the grief of vocational loss is not outside the scope of God's provision. The forms are different. The faithfulness is the same.",
  },
  {
    title: "Your Value Does Not Decline with Your Capacity",
    verse: "Isaiah 43:4",
    text: "Since you are precious and honored in my sight, and because I love you... The 'you' God is speaking to is not a productive version of you. It is not the version that shows up on your resume. It is the person, in the specific moment, in the specific body, unable to work, grieving what was lost. That person is precious and honored. Not when you get better. Now.",
  },
  {
    title: "The Long Obedience in the Same Direction",
    verse: "Galatians 6:9",
    text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. Chronic illness requires a kind of faithfulness that healthy people rarely practice — showing up for prayer when the body hurts, for community when the shame of changed circumstances makes it tempting to disappear, for hope when the illness has taken so much. This is not passive suffering. It is active, costly faithfulness.",
  },
];

const voices = [
  {
    id: 1,
    name: "Kate Bowler",
    role: "Author, Everything Happens for a Reason (And Other Lies I've Loved)",
    quote: "I believed in a prosperity gospel I didn't know I had until cancer stripped it from me. Underneath was something better: a God who didn't require my health to be present.",
    bio: "Kate Bowler is a Duke Divinity School professor who was diagnosed with stage IV cancer in her early thirties and writes with rigorous honesty about suffering, hope, and the theology that fails us when we need it most.",
  },
  {
    id: 2,
    name: "Joni Eareckson Tada",
    role: "Author, A Place of Healing",
    quote: "God does not explain his purpose. He reveals his presence. And sometimes that is more than enough.",
    bio: "Joni Eareckson Tada became quadriplegic at 17 and has spent six decades navigating the specific grief of a body that will not do what you ask — and the specific grace that meets you there.",
  },
  {
    id: 3,
    name: "Jerry Sittser",
    role: "Author, A Grace Disguised",
    quote: "The self that emerges from catastrophic loss is not lesser than the self that existed before. It is different. Often deeper.",
    bio: "Jerry Sittser writes about identity, loss, and the slow formation of a self that has been broken and rebuilt — including the vocational loss that can accompany profound suffering.",
  },
  {
    id: 4,
    name: "Ed Welch",
    role: "CCEF counselor, author When Life Is Hard",
    quote: "The question is not when will this end. The question is who is with me while it lasts. The answer to that question changes everything about endurance.",
    bio: "Ed Welch's pastoral counseling approach takes long-suffering seriously — neither minimizing it with quick hope nor drowning in it without hope — and points consistently to the presence of Jesus as sufficient for the day.",
  },
];

const practices = [
  {
    icon: "📋",
    title: "Grieve the Career Honestly",
    text: "The loss of a career to chronic illness is a real and significant loss — of identity, income, purpose, community, and routine. Give yourself explicit permission to grieve it without immediately problem-solving toward what comes next. The grief is not self-pity; it is appropriate mourning.",
  },
  {
    icon: "💰",
    title: "Get Professional Help with Benefits and Finances",
    text: "Social Security Disability, state disability programs, employer disability benefits, and charitable organizations all have eligibility requirements that are worth navigating with professional help. A disability benefits advocate or social worker can make a significant practical difference.",
  },
  {
    icon: "🎯",
    title: "Explore What Capacity Remains",
    text: "Not to perform health or pretend limitation doesn't exist — but to honestly assess what the body can still do and find forms of meaningful contribution within that capacity. Volunteering, creative work, mentoring, prayer ministry — the vocational drive doesn't disappear with the career.",
  },
  {
    icon: "⛪",
    title: "Tell Your Church What You Actually Need",
    text: "Churches often rally around visible crises and miss slow-burn need. If you need practical help (rides, meals, household tasks), pastoral presence, or financial support, name it specifically. Diffuse need goes unmet; specific requests can be answered.",
  },
  {
    icon: "🧠",
    title: "Address the Mental Health Dimension",
    text: "Chronic illness significantly increases risk of depression and anxiety. These are not signs of weak faith — they are physiological responses to physiological reality. A counselor or psychiatrist who works with chronic illness can help address the mental health dimension that the illness creates.",
  },
  {
    icon: "📅",
    title: "Create New Rhythms of Purpose",
    text: "The structure that work provided — daily schedule, social contact, sense of contribution — disappears with the career. Deliberately creating new rhythms (prayer times, creative practices, connection calls, volunteer hours) fills the structural void that loss of work creates.",
  },
];

const scriptures = [
  { verse: "2 Corinthians 12:9", text: "But he said to me, 'My grace is sufficient for you, for my power is made perfect in weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me." },
  { verse: "Romans 8:23", text: "Not only so, but we ourselves, who have the firstfruits of the Spirit, groan inwardly as we wait eagerly for our adoption to sons, the redemption of our bodies." },
  { verse: "Isaiah 43:4", text: "Since you are precious and honored in my sight, and because I love you, I will give people in exchange for you, nations in exchange for your life." },
  { verse: "Psalm 46:1", text: "God is our refuge and strength, an ever-present help in trouble." },
  { verse: "Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
];

type CICEntry = { id: string; date: string; grief: string; still: string; prayer: string };

export default function ChronicIllnessCareerLossPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<CICEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [still, setStill] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_chronicillnesscareerlossj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const e: CICEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief, still, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_chronicillnesscareerlossj_entries", JSON.stringify(next));
    setGrief(""); setStill(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_chronicillnesscareerlossj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: GREEN, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Chronic Illness & Career Loss</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For those whose illness has taken their career — navigating the grief of vocational loss, the questions of identity and worth, and the slow work of finding new forms of faithful living.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · SSDI: <strong>ssa.gov</strong> · <a href="https://www.joniandfriends.org" style={{ color: "#fca5a5" }}>joniandfriends.org</a> · Text <strong>741741</strong>
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {tabs.map(t => (
            <button key={t} onClick={() => setTab(t)} style={{ padding: "0.5rem 1rem", borderRadius: 20, border: `1px solid ${tab === t ? GREEN : BORDER}`, background: tab === t ? GREEN : "transparent", color: TEXT, cursor: "pointer", fontSize: "0.85rem", textTransform: "capitalize" }}>{t}</button>
          ))}
        </div>

        {tab === "theology" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {theology.map((t, i) => (
              <div key={i} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.5rem" }}>
                <div style={{ color: GREEN, fontSize: "0.8rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.5rem" }}>{t.verse}</div>
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
                <div style={{ borderLeft: `3px solid ${GREEN}`, paddingLeft: "1rem", marginBottom: "1rem" }}>
                  <p style={{ fontStyle: "italic", fontSize: "1.05rem", marginBottom: "0.5rem" }}>"{v.quote}"</p>
                </div>
                <p style={{ fontWeight: 700, marginBottom: "0.25rem" }}>{v.name}</p>
                <p style={{ color: GREEN, fontSize: "0.85rem", marginBottom: "0.75rem" }}>{v.role}</p>
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
                <p style={{ color: GREEN, fontWeight: 700, fontSize: "0.9rem", marginBottom: "0.5rem" }}>{s.verse}</p>
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
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What vocational loss am I grieving?</label>
                <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="What the career meant, what it gave you, what its absence costs..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What meaning or contribution remains possible?</label>
                <textarea value={still} onChange={e => setStill(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="What the body can still do, what still matters, what gives days shape..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="For provision, for purpose, for endurance in the body..." />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Your worth is not your output.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.grief && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Vocational grief</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.grief}</p></>}
                {e.still && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>What remains</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.still}</p></>}
                {e.prayer && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Everything Happens for a Reason — Kate Bowler</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Kate Bowler on the theology that fails in suffering — and what she found underneath it when her stage IV cancer diagnosis stripped it away.</p>
              <VideoEmbed videoId="y-DQH-M1HuM" title="Everything Happens for a Reason Kate Bowler" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>A Place of Healing — Joni Eareckson Tada</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Joni on navigating the grief of a body that will not cooperate — and the specific grace that meets you in that experience.</p>
              <VideoEmbed videoId="jJPVNIAFmvA" title="A Place of Healing Joni Eareckson Tada" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Identity After Illness</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On who you are when what you did is no longer possible — and the gospel's answer to the question of worth when capacity diminishes.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Identity After Illness" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Chronic Illness and the Church's Response</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>What the church can and should offer to those navigating long-term illness — and the common failures that leave sick people more isolated than cared for.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Chronic Illness and the Church's Response" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
