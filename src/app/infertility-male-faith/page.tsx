"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Male Infertility Is Not a Masculine Failure",
    verse: "Psalm 139:14",
    text: "I praise you because I am fearfully and wonderfully made. Sperm count, morphology, motility — these are medical measurements, not measures of manhood. The culture that equates fertility with masculinity is not telling the truth about what it means to be a man made in the image of God. Your worth as a man, as a husband, as a child of God is not located in your reproductive capacity.",
  },
  {
    title: "The Silence Around Male Grief Is Costly",
    verse: "Ecclesiastes 4:10",
    text: "If either of them falls down, one can help the other up. But pity anyone who falls and has no one to help them up. Men experiencing infertility-related grief often carry it alone — because the cultural expectation is that women grieve and men support. This isolation compounds the grief. Men need companions in infertility grief as much as women do, and they rarely seek or find them.",
  },
  {
    title: "God Sees Both Hannah and Elkanah",
    verse: "1 Samuel 1:5",
    text: "But to Hannah he gave a double portion because he loved her, and the Lord had closed her womb. Elkanah's response to Hannah is not theological perfection — 'Am I not more to you than ten sons?' — but his love is real and his frustration on her behalf is real. The husband in an infertile marriage is grieving too, and his grief has its own character. God sees both.",
  },
  {
    title: "Fatherhood Is Not Only Biological",
    verse: "Psalm 68:5",
    text: "A father to the fatherless, a defender of widows, is God in his holy dwelling. The fatherhood of God is not biological. The adoptive father, the spiritual mentor, the coach, the uncle, the foster father — all practice fatherhood in its essential form, which is presence, protection, and love. Biology is one form; covenant and care are the heart of the matter.",
  },
  {
    title: "Grief and Trust Can Coexist",
    verse: "Habakkuk 3:17-18",
    text: "Though the fig tree does not bud and there are no grapes on the vines, though the olive crop fails and the fields produce no food... yet I will rejoice in the Lord, I will be joyful in God my Savior. Habakkuk's faith is not the faith that denies the failed harvest. It is the faith that looks at the failed harvest honestly and still chooses the Lord. This is the posture available to the man who grieves his infertility.",
  },
];

const voices = [
  {
    id: 1,
    name: "Tony Merida",
    role: "Pastor, author Ordinary",
    quote: "Adoption is not plan B. For some families, it is the very thing God had in mind from the beginning.",
    bio: "Tony Merida and his wife have adopted five children. His writing on family, fatherhood, and adoption has helped many couples navigating infertility find a different path forward that is not a lesser one.",
  },
  {
    id: 2,
    name: "Russell Moore",
    role: "Author, Adopted for Life",
    quote: "The Bible begins with a woman who could not have children. The Bible ends with adoption. The infertile couple is in good biblical company.",
    bio: "Russell Moore's theology of adoption is rooted in the gospel itself — God adopting us as sons and daughters — and has helped many couples experiencing infertility find theological meaning in their journey.",
  },
  {
    id: 3,
    name: "William Cutrer",
    role: "OB-GYN and author, The Infertility Companion",
    quote: "Men grieve infertility differently, not less. The church that only ministers to the wife is missing half the couple.",
    bio: "William Cutrer, an OB-GYN who experienced infertility with his own wife, wrote one of the most comprehensive Christian guides to infertility — addressing both the medical and the theological dimensions.",
  },
  {
    id: 4,
    name: "Sherri Devashrayee Connell",
    role: "Author and infertility advocate",
    quote: "The hardest part of male infertility is the silence. Men are not given permission to grieve, so they carry it in ways that isolate them from their wives and from God.",
    bio: "Sherri Devashrayee Connell's work on infertility from a Christian perspective specifically addresses the ways men and women experience and express infertility grief differently — and what genuine couple companionship through the process looks like.",
  },
];

const practices = [
  {
    icon: "🗣️",
    title: "Name Your Grief to Your Wife",
    text: "The man who suppresses infertility grief to be strong for his wife is inadvertently making her carry it alone. Tell her what you are feeling — the grief, the frustration, the shame, the anger. The couple that grieves together is more likely to survive the experience with the marriage intact.",
  },
  {
    icon: "🤝",
    title: "Find a Male Peer Who Understands",
    text: "Men rarely find peer support for infertility naturally. Resolve.org, Celebrate parenting groups, and some church men's groups have men who have navigated infertility. Seeking one honest conversation with a man who has been through it can break the isolation significantly.",
  },
  {
    icon: "🧬",
    title: "Pursue Thorough Medical Evaluation",
    text: "Male factor infertility accounts for roughly half of infertility cases and is often underdiagnosed because evaluation focuses on women first. A urologist specializing in reproductive medicine can identify treatable causes — varicocele, hormonal imbalance, infection — that significantly change the prognosis.",
  },
  {
    icon: "💬",
    title: "Discuss Alternatives Together and Equally",
    text: "Donor sperm, adoption, embryo adoption, fostering, childless living — these alternatives should be discussed between spouses with equal voice. The man's grief about each option and the couple's theological convictions about what constitutes their family belong in the conversation.",
  },
  {
    icon: "📖",
    title: "Engage the Theology of Fatherhood",
    text: "Read what the Bible says about fatherhood, adoption, and family. The theology of fatherhood is richer and more varied than biological reproduction. The man who cannot have biological children is not excluded from fatherhood — he is invited into a different form of it.",
  },
  {
    icon: "🙏",
    title: "Pray Together With the Grief, Not Around It",
    text: "Couples sometimes pray for pregnancy without praying about the grief of not conceiving. Praying together — 'Lord, this is painful, and we are bringing it to you' — is different from praying for a specific outcome. The honest prayer is always more sustaining than the petitionary one.",
  },
];

const scriptures = [
  { verse: "Psalm 139:14", text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well." },
  { verse: "Habakkuk 3:17-18", text: "Though the fig tree does not bud and there are no grapes on the vines... yet I will rejoice in the Lord, I will be joyful in God my Savior." },
  { verse: "Psalm 127:3", text: "Children are a heritage from the Lord, offspring a reward from him." },
  { verse: "Psalm 68:5", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling." },
  { verse: "Romans 8:26", text: "In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans." },
  { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
];

type IMFEntry = { id: string; date: string; grief: string; told: string; prayer: string };

export default function InfertilityMaleFaithPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<IMFEntry[]>([]);
  const [grief, setGrief] = useState("");
  const [told, setTold] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_infertilitymalefaithj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!grief.trim()) return;
    const e: IMFEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), grief, told, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_infertilitymalefaithj_entries", JSON.stringify(next));
    setGrief(""); setTold(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_infertilitymalefaithj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: GREEN, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Male Infertility & Faith</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For the men who carry infertility grief silently — and for couples navigating male factor infertility together, where neither the medicine nor the theology is as simple as it looks.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · <a href="https://resolve.org" style={{ color: "#fca5a5" }}>resolve.org</a> · <a href="https://www.hannah.org" style={{ color: "#fca5a5" }}>hannah.org</a> · Text <strong>741741</strong>
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
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What grief am I carrying that I haven't named?</label>
                <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="Name the grief specifically — the diagnosis, the sense of failure, the questions about fatherhood..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>Have I told my wife what I am actually feeling?</label>
                <textarea value={told} onChange={e => setTold(e.target.value)} rows={2} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="What you said, what you held back, what you want to say..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="For your wife, for your marriage, for the child you hope for, for peace with what is..." />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Your grief deserves to be named.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.grief && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Unnamed grief</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.grief}</p></>}
                {e.told && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>What I told her</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.told}</p></>}
                {e.prayer && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Men and Infertility Grief</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On how men experience and express infertility grief differently from women — and what couples need to understand about each other's process.</p>
              <VideoEmbed videoId="LQNbUqVwVlo" title="Men and Infertility Grief" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Adopted for Life — Russell Moore</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Russell Moore on the theology of adoption and why it is not plan B for the infertile couple but can be the very plan God had in mind.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Adopted for Life Russell Moore" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Fatherhood Beyond Biology</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>A theological exploration of what fatherhood actually is — and why the gospel's vision of fatherhood is not reducible to biological reproduction.</p>
              <VideoEmbed videoId="ZGk1hl1nNrw" title="Fatherhood Beyond Biology" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Grief and Trust in Infertility — The Couple's Journey</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On navigating infertility as a couple — maintaining connection, grieving together, and finding a path forward that both partners can walk.</p>
              <VideoEmbed videoId="mC-zw0zCCtg" title="Grief and Trust in Infertility The Couple's Journey" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
