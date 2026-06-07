"use client";
import { useState, useEffect } from "react";
import VideoEmbed from "@/components/VideoEmbed";

const BG = "#07070F", CARD = "#12121F", BORDER = "#1E1E32", PURPLE = "#6B4FBB", TEXT = "#F2F2F8", MUTED = "#9898B3";

const theology = [
  {
    title: "Divorce Is a Tragedy, Not a Disqualification",
    verse: "Malachi 2:16",
    text: "I hate divorce, says the Lord. This verse is often weaponized against divorced Christians rather than read in context. God hates divorce the way he hates death — because it is the end of something that was meant to live. His hatred is for the suffering, not for the person who survived it. Divorce does not remove you from God's love, from the church's fellowship, or from the possibility of flourishing.",
  },
  {
    title: "The Children Are Watching How You Handle This",
    verse: "Proverbs 22:6",
    text: "Start children off on the way they should go, and even when they are old they will not turn from it. What children learn from divorce is not primarily from what they are told but from what they observe — how their parents handle conflict, speak about each other, manage transitions, and demonstrate forgiveness and self-control under pressure. The most powerful pastoral care for children of divorce is adults who model grace.",
  },
  {
    title: "God Does Not Abandon Broken Covenants",
    verse: "Isaiah 54:5",
    text: "For your Maker is your husband — the Lord Almighty is his name. This verse was spoken to a people whose covenant relationship with God had failed catastrophically. God does not address them as permanently disqualified. He addresses them as his bride. The God who pursues Israel through every covenant failure is the same God who meets the divorced Christian in their own broken covenant.",
  },
  {
    title: "Protecting Children Comes First",
    verse: "Mark 9:42",
    text: "If anyone causes one of these little ones — those who believe in me — to stumble, it would be better for them to have a large millstone hung around their neck and to be thrown into the sea. The biblical protection of children is serious. Remaining in a marriage that exposes children to abuse, violence, or severe psychological harm in the name of preserving the covenant is not faithfulness to Scripture. Children are also sacred covenant members.",
  },
  {
    title: "Forgiveness Is Not Reconciliation",
    verse: "Romans 12:18",
    text: "If it is possible, as far as it depends on you, live at peace with everyone. Paul's qualifier — 'if it is possible' and 'as far as it depends on you' — acknowledges that not all peace is achievable. Forgiveness of an ex-spouse is a gift you give yourself and God; it does not require reconciliation, trust, or restored relationship. Forgiving the one who harmed you and your children does not mean co-parenting without limits.",
  },
];

const voices = [
  {
    id: 1,
    name: "Gary Thomas",
    role: "Author, Sacred Marriage and When to Walk Away",
    quote: "Marriage was designed to create flourishing. When a marriage is destroying rather than creating flourishing — for the spouse, for the children — the sanctification argument does not require endurance at any cost.",
    bio: "Gary Thomas, known for his theology of marriage as sanctification, has also written about when divorce is appropriate — offering a counterweight to simplistic reconciliation-at-any-cost frameworks.",
  },
  {
    id: 2,
    name: "Leslie Vernick",
    role: "Author, The Emotionally Destructive Marriage",
    quote: "God hates divorce. He also hates what some marriages do to people. Holding those two truths together changes what pastoral care looks like.",
    bio: "Leslie Vernick is a therapist and author who works with women in destructive marriages, arguing that the church's response to divorce must account for the harm some marriages cause rather than treating all divorces identically.",
  },
  {
    id: 3,
    name: "Ron Deal",
    role: "Author, The Smart Stepfamily; President, FamilyLife Blended",
    quote: "The number one factor in children's outcomes after divorce is how the adults around them handle the divorce — not the divorce itself.",
    bio: "Ron Deal's research on children's outcomes after divorce identifies the quality of adult behavior — especially between co-parents — as the single most significant variable in how children fare.",
  },
  {
    id: 4,
    name: "Constance Ahrons",
    role: "Sociologist, author The Good Divorce",
    quote: "A good divorce is not an oxymoron. It is a divorce in which the adults prioritize the children's wellbeing over their own conflict.",
    bio: "Constance Ahrons spent decades studying outcomes for families after divorce and found that the defining variable was not whether divorce happened but how — specifically, whether parents could maintain a cooperative co-parenting relationship.",
  },
];

const practices = [
  {
    icon: "🧒",
    title: "Never Put Children in the Middle",
    text: "This means: never using children to carry messages, never asking children to report on the other parent, never speaking negatively about the other parent in front of the children, and never making children feel that loving both parents is a betrayal. Children need permission to love both their parents fully.",
  },
  {
    icon: "📋",
    title: "Create a Parenting Plan That Works",
    text: "A specific, detailed parenting plan — covering schedules, decision-making, communication protocols, and conflict resolution — reduces the day-to-day conflict that harms children. Invest in mediation if necessary to build a plan both parents can follow.",
  },
  {
    icon: "🧠",
    title: "Get Individual Therapy for Yourself",
    text: "The emotional load of divorce — grief, anger, shame, fear, relief, guilt — requires a container that is not your children, your mutual friends, or your attorney. Your own therapist, who is entirely for you, is essential.",
  },
  {
    icon: "👶",
    title: "Consider Therapy for the Children",
    text: "Children of divorce often need a safe space outside the family system to process what is happening. A child therapist who specializes in family transition can help children express and integrate what they are experiencing.",
  },
  {
    icon: "⛪",
    title: "Stay Connected to Faith Community",
    text: "The shame around divorce can drive people away from church exactly when they need community most. Find a church or small group where divorce is not treated as a scarlet letter and where your children can have stable faith community even as the home changes.",
  },
  {
    icon: "📜",
    title: "Protect the Legal Agreements",
    text: "Informal arrangements often break down under emotional pressure. Having a clear legal agreement — including custody, support, communication, and decision-making — protects you and your children even when the co-parenting relationship deteriorates.",
  },
];

const scriptures = [
  { verse: "Romans 12:18", text: "If it is possible, as far as it depends on you, live at peace with everyone." },
  { verse: "Isaiah 54:5", text: "For your Maker is your husband — the Lord Almighty is his name — the Holy One of Israel is your Redeemer; he is called the God of all the earth." },
  { verse: "Psalm 68:5-6", text: "A father to the fatherless, a defender of widows, is God in his holy dwelling. God sets the lonely in families; he leads out the prisoners with singing." },
  { verse: "Lamentations 3:22-23", text: "Because of the Lord's great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness." },
  { verse: "Proverbs 22:6", text: "Start children off on the way they should go, and even when they are old they will not turn from it." },
  { verse: "Romans 8:28", text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose." },
];

type DWCEntry = { id: string; date: string; children: string; grief: string; prayer: string };

export default function DivorceWithChildrenChristianPage() {
  const [tab, setTab] = useState("theology");
  const [entries, setEntries] = useState<DWCEntry[]>([]);
  const [children, setChildren] = useState("");
  const [grief, setGrief] = useState("");
  const [prayer, setPrayer] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem("vine_divorcewithchildrenj_entries");
    if (raw) setEntries(JSON.parse(raw));
  }, []);

  function saveEntry() {
    if (!children.trim()) return;
    const e: DWCEntry = { id: Date.now().toString(), date: new Date().toLocaleDateString(), children, grief, prayer };
    const next = [e, ...entries];
    setEntries(next);
    localStorage.setItem("vine_divorcewithchildrenj_entries", JSON.stringify(next));
    setChildren(""); setGrief(""); setPrayer("");
  }

  function deleteEntry(id: string) {
    const next = entries.filter(e => e.id !== id);
    setEntries(next);
    localStorage.setItem("vine_divorcewithchildrenj_entries", JSON.stringify(next));
  }

  const tabs = ["theology", "voices", "practices", "scripture", "journal", "videos"];

  return (
    <main style={{ background: BG, minHeight: "100vh", color: TEXT, fontFamily: "Georgia, serif" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ color: PURPLE, fontSize: "0.85rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Pastoral Care</div>
          <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 700, marginBottom: "0.75rem" }}>Divorce with Children</h1>
          <p style={{ color: MUTED, maxWidth: 560, margin: "0 auto", lineHeight: 1.7 }}>For Christian parents navigating divorce — the grief, the co-parenting, the children's wellbeing, the church's judgment, and the God who meets you in all of it.</p>
        </div>

        <div style={{ background: "#1a0a0a", border: "1px solid #7f1d1d", borderRadius: 8, padding: "1rem 1.25rem", marginBottom: "2rem" }}>
          <p style={{ color: "#fca5a5", fontWeight: 600, marginBottom: "0.25rem" }}>Support Resources</p>
          <p style={{ color: "#fca5a5", fontSize: "0.9rem", margin: 0 }}>
            988 Lifeline · DV Hotline <strong>1-800-799-7233</strong> · <a href="https://www.focusonthefamily.com" style={{ color: "#fca5a5" }}>focusonthefamily.com</a> · Text <strong>741741</strong>
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
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>How are the children doing?</label>
                <textarea value={children} onChange={e => setChildren(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="What you are observing, what worries you, what gives you hope about them..." />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>What are you grieving?</label>
                <textarea value={grief} onChange={e => setGrief(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="The marriage, the family you imagined, the daily life that changed..." />
              </div>
              <div style={{ marginBottom: "1.25rem" }}>
                <label style={{ display: "block", color: MUTED, fontSize: "0.85rem", marginBottom: "0.4rem" }}>A prayer</label>
                <textarea value={prayer} onChange={e => setPrayer(e.target.value)} rows={3} style={{ width: "100%", background: BG, border: `1px solid ${BORDER}`, borderRadius: 6, color: TEXT, padding: "0.75rem", fontSize: "0.95rem", resize: "vertical", boxSizing: "border-box" }} placeholder="For the children, for yourself, for the ability to do this well..." />
              </div>
              <button onClick={saveEntry} style={{ background: PURPLE, color: TEXT, border: "none", borderRadius: 8, padding: "0.75rem 1.5rem", fontWeight: 700, cursor: "pointer" }}>Save Entry</button>
            </div>
            {entries.length === 0 && <p style={{ color: MUTED, textAlign: "center" }}>No entries yet. Your children need you to process this honestly.</p>}
            {entries.map(e => (
              <div key={e.id} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                  <span style={{ color: MUTED, fontSize: "0.85rem" }}>{e.date}</span>
                  <button onClick={() => deleteEntry(e.id)} style={{ background: "transparent", border: "none", color: MUTED, cursor: "pointer", fontSize: "0.8rem" }}>Delete</button>
                </div>
                {e.children && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>The children</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.children}</p></>}
                {e.grief && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Grief</p><p style={{ marginBottom: "0.75rem", lineHeight: 1.7 }}>{e.grief}</p></>}
                {e.prayer && <><p style={{ color: PURPLE, fontSize: "0.8rem", marginBottom: "0.25rem" }}>Prayer</p><p style={{ lineHeight: 1.7 }}>{e.prayer}</p></>}
              </div>
            ))}
          </div>
        )}

        {tab === "videos" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Children and Divorce — What They Need Most</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Research findings on what actually determines children's outcomes after divorce — and what parents can do to protect their children through the process.</p>
              <VideoEmbed videoId="G5gLrHClpKQ" title="Children and Divorce What They Need Most" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>The Emotionally Destructive Marriage — Leslie Vernick</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Leslie Vernick on distinguishing a difficult marriage from a destructive one — and what the church should say to those in each.</p>
              <VideoEmbed videoId="kfcVPh2VDhQ" title="The Emotionally Destructive Marriage Leslie Vernick" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Co-Parenting After Divorce</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>Practical guidance on building a co-parenting relationship that protects children — even when the adult relationship is difficult or broken.</p>
              <VideoEmbed videoId="eBl7gT7gQ6g" title="Co-Parenting After Divorce" />
            </div>
            <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.25rem" }}>
              <h3 style={{ fontWeight: 700, marginBottom: "0.5rem" }}>Grace for Divorced Christians</h3>
              <p style={{ color: MUTED, fontSize: "0.9rem", marginBottom: "1rem" }}>A pastoral reflection on what the gospel says to Christians who are divorced — against both the minimization and the condemnation that churches often offer.</p>
              <VideoEmbed videoId="NnGBhG03g4M" title="Grace for Divorced Christians" />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
