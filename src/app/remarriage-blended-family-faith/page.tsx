"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", GREEN = "#3a7d56", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Redemption Means Bringing Good Out of Broken",
    verse: "Romans 8:28",
    text: "God works in all things — including the wreckage of divorce, the grief of widowhood, the complexity of step-relationships. Remarriage is not a theological loophole. It is either a sin to be named and repented of, or a new covenant entered into honestly. Either way, God is present in what comes next. His redemptive work is not defeated by human failure.",
  },
  {
    title: "Stepparents and the Long Game",
    verse: "Galatians 6:9",
    text: "Do not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. Stepparenting is notoriously slow. Attachment takes years. Trust is built in tiny increments over thousands of meals and school pickups and disappointments and repairs. The harvest Paul describes is real — but it rarely comes quickly. This is a theology for the long game.",
  },
  {
    title: "Love Is Not Automatic",
    verse: "1 Corinthians 13:4-7",
    text: "Love is patient, love is kind. What Paul describes is not an emotion — it is a series of choices. In a blended family, the emotion of love toward stepchildren, toward an ex-spouse's children, toward a new partner's parents, often does not arrive spontaneously. But the practice of love — choosing patience, choosing kindness, choosing to act as if — can precede and eventually produce genuine attachment.",
  },
  {
    title: "Biological Bonds Are Real and Must Be Honored",
    verse: "Exodus 20:12",
    text: "Honor your father and your mother. Stepparents who try to replace biological parents rather than supplement them create loyalty conflicts that wound children. God did not design a new spouse to erase the first parent. Children need permission to love all their parents. Stepparents who give that permission earn a kind of trust that demand cannot produce.",
  },
  {
    title: "The Household Is a Mission Field",
    verse: "Joshua 24:15",
    text: "As for me and my household, we will serve the Lord. This verse is often quoted as if the household is obvious and uncomplicated. Joshua was saying it on the other side of the wilderness — when the boundaries of the household were still being established, when not everyone was sure what they believed or who they belonged to. The new blended household is also a mission, not an inherited fact. Choose it daily.",
  },
];

const voices = [
  {
    id: 1,
    name: "Ron Deal",
    role: "Author, The Smart Stepfamily; President, FamilyLife Blended",
    quote: "The number one mistake blended families make is trying to blend too quickly. You don't blend families like you blend a smoothie. You grow them like you grow a plant — slowly, with the right conditions.",
    bio: "Ron Deal is the leading Christian researcher and practitioner on stepfamily dynamics, the author of multiple books on blended families, and a therapist and educator who has helped thousands of stepfamilies.",
  },
  {
    id: 2,
    name: "Laura Petherbridge",
    role: "Author, When 'I Do' Becomes 'I Don't'; stepfamily educator",
    quote: "Stepchildren are not broken children. They are grieving children. The key is distinguishing between grief and defiance.",
    bio: "Laura Petherbridge draws on her own experience as both a stepchild and a stepparent to offer nuanced, compassionate guidance for blended families navigating loyalty conflicts and slow bonding.",
  },
  {
    id: 3,
    name: "Gary Thomas",
    role: "Author, Sacred Marriage",
    quote: "A marriage that includes stepchildren is asking more of you than almost any other marriage. God is forming something in you through that ask.",
    bio: "Gary Thomas applies his theology of marriage as sanctification specifically to remarriage and blended families, arguing that the additional complexity is a unique opportunity for spiritual formation.",
  },
  {
    id: 4,
    name: "Patricia Papernow",
    role: "Author, Surviving and Thriving in Stepfamily Relationships",
    quote: "The stepfamily cycle has stages. Every family goes through them. The ones that survive are the ones that know the stage they're in.",
    bio: "Patricia Papernow is a psychologist and stepfamily researcher whose work has helped clergy and counselors understand the developmental arc of blended family formation — including what is normal and what is a crisis.",
  },
];

const practices = [
  {
    icon: "⏳",
    title: "Give It Time — Years, Not Months",
    text: "Research suggests blended families take five to seven years to develop genuine cohesion. If you are in year one or two feeling like it is not working, you may simply be in year one or two. Adjust your timeline expectations before you adjust your family.",
  },
  {
    icon: "👫",
    title: "Protect the Marriage First",
    text: "The most important relationship in the blended household is the new marriage. Children who see a strong, loving, committed couple are more likely to eventually accept the blended family. A weak marriage that prioritizes children above itself often produces worse outcomes for both.",
  },
  {
    icon: "🔗",
    title: "Let the Biological Parent Lead with Their Children",
    text: "At least in early years, the stepparent's primary role is warmth and support — not discipline. The biological parent should carry disciplinary authority with their own children. This reduces resentment and allows the stepparent-stepchild relationship to develop organically.",
  },
  {
    icon: "🗣️",
    title: "Talk About the Absent Parent Without Contempt",
    text: "Regardless of the circumstances of divorce, children need their biological parents. Speaking about an ex-spouse with contempt poisons children's ability to love both parents and, over time, poisons their ability to trust you. Speak honestly but without venom.",
  },
  {
    icon: "🏠",
    title: "Create New Family Rituals",
    text: "The new family needs its own identity — its own holiday traditions, its own Saturday routines, its own inside jokes. These do not erase prior family traditions; they create new ones that belong to this family. Over years, these rituals become the shared history that makes a family.",
  },
  {
    icon: "📚",
    title: "Get Education, Not Just Prayer",
    text: "Blended families have unique dynamics that require specific knowledge — not just spiritual encouragement. Read Ron Deal's Smart Stepfamily, attend a Blended Family Conference, find a therapist who specializes in stepfamily dynamics. This is a new terrain and a map helps.",
  },
];

const scriptures = [
  { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
  { verse: "Galatians 6:9", text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up." },
  { verse: "Psalm 68:6", text: "God sets the lonely in families; he leads out the prisoners with singing." },
  { verse: "Joshua 24:15", text: "But as for me and my household, we will serve the Lord." },
  { verse: "1 Corinthians 13:7", text: "Love bears all things, believes all things, hopes all things, endures all things." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
];

type RBEntry = { id: string; date: string; hard: string; win: string; prayer: string };

export default function RemarriageBlendedFamilyPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<RBEntry[]>([]);
  const [hard, setHard] = useState("");
  const [win, setWin] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_remarriageblendedj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!hard.trim()) return;
    const e: RBEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), hard, win, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_remarriageblendedj_entries", JSON.stringify(next));
    setHard(""); setWin(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_remarriageblendedj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <>
      <Navbar />
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" , paddingTop: "var(--header-height, 80px)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: GREEN, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Remarriage & Blended Family</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For stepparents, stepchildren, and remarried couples navigating the slow, beautiful, complex work of becoming a family again.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · <a href="https://familylife.com/blended" style={{ color: "#fca5a5" }}>familylife.com/blended</a> · <a href="https://smartstepfamilies.com" style={{ color: "#fca5a5" }}>smartstepfamilies.com</a> · Text <strong>741741</strong>
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
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What is hard right now in your family?</label>
                <textarea value={hard} onChange={e => setHard(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="A conflict, a slow-forming bond, a grief, a frustration..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What small win happened recently?</label>
                <textarea value={win} onChange={e => setWin(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="A meal together, a laugh, a moment of genuine connection..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer for your family</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="What do you want God to do in this family?" />
              </div>
              <button onClick={saveEntry} style={{ background: GREEN, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Record the honest arc of your family's story.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.hard && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>What is hard</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.hard}</p></>}
                {e.win && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Small win</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.win}</p></>}
                {e.prayer && <><p style={{ color: GREEN, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>The Smart Stepfamily — Ron Deal</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Ron Deal on the unique developmental stages of blended families and what to expect at each stage.</p>
              <VideoEmbed videoId="G5gLrHClpKQ" title="The Smart Stepfamily Ron Deal" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Stepparenting — The Long Game</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>On why blended family formation takes years and what sustains stepparents through the slow and often discouraging middle.</p>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="Stepparenting The Long Game" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Children, Divorce, and Loyalty Conflicts</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Understanding why stepchildren resist blended family dynamics and how parents can reduce loyalty conflicts.</p>
              <VideoEmbed videoId="jJPVNIAFmvA" title="Children Divorce and Loyalty Conflicts" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Sacred Marriage in a Blended Family</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Gary Thomas on how the unique stresses of remarriage and stepparenting can become occasions for spiritual formation.</p>
              <VideoEmbed videoId="kfcVPh2VDhQ" title="Sacred Marriage in a Blended Family" />
            </div>
          </div>
        )}
      </div>
    </main>
      <Footer />
    </>
  );
}
